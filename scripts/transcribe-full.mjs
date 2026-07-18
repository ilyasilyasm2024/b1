/**
 * Transcribe chunked audio and combine with time offsets.
 * Then detect Teil boundaries and split using ffmpeg.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Load env
const envContent = fs.readFileSync(path.join(ROOT, ".env"), "utf-8");
const envVars = {};
for (const line of envContent.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) envVars[match[1].trim()] = match[2].trim();
}
const GROQ_API_KEY = envVars.VITE_GROQ_API_KEY;

const GROQ_URL = "https://api.groq.com/openai/v1/audio/transcriptions";
const MODEL = "whisper-large-v3";
const CHUNK_DIR = "/tmp/m3-chunks";
const OUTPUT_DIR = path.join(ROOT, "public/horen/module3");
const CHUNK_DURATION = 300; // 5 minutes

async function transcribeChunk(filePath, timeOffset) {
  const fileName = path.basename(filePath);
  console.log(`🎙️  Transcribing chunk: ${fileName} (offset: ${timeOffset}s)`);

  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: "audio/mpeg" });

  const formData = new FormData();
  formData.append("file", blob, fileName);
  formData.append("model", MODEL);
  formData.append("language", "de");
  formData.append("response_format", "verbose_json");

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${GROQ_API_KEY}` },
    body: formData,
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`   ❌ Failed: ${err.slice(0, 200)}`);
    return [];
  }

  const data = await res.json();
  // Offset all segment timestamps
  return (data.segments || []).map((s) => ({
    start: s.start + timeOffset,
    end: s.end + timeOffset,
    text: s.text,
  }));
}

async function main() {
  // Step 1: Transcribe all chunks
  const chunks = fs.readdirSync(CHUNK_DIR).filter(f => f.endsWith(".mp3")).sort();
  let allSegments = [];

  for (let i = 0; i < chunks.length; i++) {
    const offset = i * CHUNK_DURATION;
    const segments = await transcribeChunk(path.join(CHUNK_DIR, chunks[i]), offset);
    allSegments = allSegments.concat(segments);
    console.log(`   ✅ Got ${segments.length} segments`);
    if (i < chunks.length - 1) await new Promise(r => setTimeout(r, 1500));
  }

  console.log(`\n📝 Total segments: ${allSegments.length}`);

  // Step 2: Find Teil boundaries
  // B1 markers: "Teil 1" intro mentions "fünf kurze Texte", Teil 2 "einen Text einmal",
  // Teil 3 "ein Gespräch einmal", Teil 4 "eine Diskussion zweimal"
  const fullText = allSegments.map(s => s.text).join(" ");

  // Find Teil start positions by looking for key phrases
  const teilMarkers = [];
  
  // Teil 1: "Sie hören nun fünf kurze Texte"
  const t1Idx = allSegments.findIndex(s => 
    /sie h(ö|oe)ren nun f(ü|ue)nf kurze/i.test(s.text)
  );
  
  // Teil 2: "Sie hören nun einen Text" (einmal)
  const t2Idx = allSegments.findIndex((s, i) => 
    i > (t1Idx + 10) && /sie h(ö|oe)ren nun einen text/i.test(s.text)
  );
  
  // Teil 3: "Sie hören nun ein Gespräch"
  const t3Idx = allSegments.findIndex((s, i) => 
    i > (t2Idx + 5) && /sie h(ö|oe)ren nun ein gespr(ä|ae)ch/i.test(s.text)
  );
  
  // Teil 4: "Sie hören nun eine Diskussion"
  const t4Idx = allSegments.findIndex((s, i) => 
    i > (t3Idx + 5) && /sie h(ö|oe)ren nun eine diskussion/i.test(s.text)
  );

  console.log(`\n🔍 Teil markers found:`);
  console.log(`   Teil 1: segment ${t1Idx} @ ${t1Idx >= 0 ? allSegments[t1Idx].start.toFixed(1) + 's' : 'NOT FOUND'}`);
  console.log(`   Teil 2: segment ${t2Idx} @ ${t2Idx >= 0 ? allSegments[t2Idx].start.toFixed(1) + 's' : 'NOT FOUND'}`);
  console.log(`   Teil 3: segment ${t3Idx} @ ${t3Idx >= 0 ? allSegments[t3Idx].start.toFixed(1) + 's' : 'NOT FOUND'}`);
  console.log(`   Teil 4: segment ${t4Idx} @ ${t4Idx >= 0 ? allSegments[t4Idx].start.toFixed(1) + 's' : 'NOT FOUND'}`);

  // Build split points
  const inputFile = path.join(OUTPUT_DIR, "Modelltest 3 - Hören mit Lösungen 15 Übungsprüfungen (B1 Zertifikat Goethe & ÖSD).mp3");
  const totalDuration = 2252; // from ffprobe earlier

  const splits = [];
  if (t1Idx >= 0) splits.push({ name: "teil1", start: allSegments[t1Idx].start });
  if (t2Idx >= 0) splits.push({ name: "teil2", start: allSegments[t2Idx].start });
  if (t3Idx >= 0) splits.push({ name: "teil3", start: allSegments[t3Idx].start });
  if (t4Idx >= 0) splits.push({ name: "teil4", start: allSegments[t4Idx].start });

  if (splits.length === 0) {
    console.error("❌ No Teil markers found. Cannot split.");
    // Save full transcript for manual inspection
    fs.writeFileSync(path.join(OUTPUT_DIR, "full-transcript.json"), JSON.stringify(allSegments, null, 2));
    console.log("   Saved full transcript to public/horen/module3/full-transcript.json for inspection.");
    return;
  }

  // Step 3: Split audio with ffmpeg
  console.log(`\n✂️  Splitting audio into ${splits.length} parts...`);

  for (let i = 0; i < splits.length; i++) {
    const startTime = Math.max(0, splits[i].start - 1); // 1s before marker for clean cut
    const endTime = i < splits.length - 1 ? splits[i + 1].start - 1 : totalDuration;
    const duration = endTime - startTime;
    const outFile = path.join(OUTPUT_DIR, `m3-${splits[i].name}.mp3`);

    const cmd = `ffmpeg -y -i "${inputFile}" -ss ${startTime.toFixed(2)} -t ${duration.toFixed(2)} -c copy "${outFile}"`;
    console.log(`   ${splits[i].name}: ${startTime.toFixed(1)}s → ${endTime.toFixed(1)}s (${duration.toFixed(0)}s)`);
    execSync(cmd, { stdio: "pipe" });
    console.log(`   ✅ ${outFile}`);
  }

  // Step 4: For Teil 1, try to find individual texts (Text 1-5)
  if (t1Idx >= 0 && t2Idx >= 0) {
    console.log(`\n🔍 Looking for Text 1-5 within Teil 1...`);
    const teil1Segments = allSegments.slice(t1Idx, t2Idx);
    
    // Look for Beispiel and then patterns like long pauses (gaps > 3s between segments)
    // or markers like "Text eins", "Text zwei" etc.
    const textStarts = [];
    
    // Find Beispiel
    const beispielIdx = teil1Segments.findIndex(s => /beispiel/i.test(s.text));
    if (beispielIdx >= 0) {
      textStarts.push({ name: "beispiel", segIdx: beispielIdx });
    }
    
    // Find texts by looking for significant gaps (>4s) which indicate new recordings
    let prevEnd = 0;
    const gapThreshold = 4;
    let textCount = 0;
    
    for (let j = 1; j < teil1Segments.length; j++) {
      const gap = teil1Segments[j].start - teil1Segments[j - 1].end;
      if (gap > gapThreshold && textCount < 6) {
        textCount++;
        // Skip the first gap (before Beispiel) and the gap after Beispiel intro
        if (textCount >= 2) {
          textStarts.push({ name: `text${textCount - 1}`, segIdx: j });
        }
      }
    }
    
    if (textStarts.length > 0) {
      console.log(`   Found ${textStarts.length} markers in Teil 1`);
      
      for (let i = 0; i < textStarts.length; i++) {
        const seg = teil1Segments[textStarts[i].segIdx];
        const startTime = Math.max(0, seg.start - 0.5);
        const endSeg = i < textStarts.length - 1 
          ? teil1Segments[textStarts[i + 1].segIdx]
          : allSegments[t2Idx];
        const endTime = endSeg.start - 0.5;
        const duration = endTime - startTime;
        
        if (duration > 5) { // Only split if longer than 5s
          const outFile = path.join(OUTPUT_DIR, `m3-teil1-${textStarts[i].name}.mp3`);
          const cmd = `ffmpeg -y -i "${inputFile}" -ss ${startTime.toFixed(2)} -t ${duration.toFixed(2)} -c copy "${outFile}"`;
          execSync(cmd, { stdio: "pipe" });
          console.log(`   ✅ ${textStarts[i].name}: ${startTime.toFixed(1)}s → ${endTime.toFixed(1)}s`);
        }
      }
    }
  }

  // Save the full transcript
  fs.writeFileSync(path.join(OUTPUT_DIR, "full-transcript.json"), JSON.stringify(allSegments, null, 2));
  console.log(`\n✅ Done! Files saved to public/horen/module3/`);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
