/**
 * Clean re-transcription of module3 chunks with CORRECT 300s offsets.
 * Transcribes each chunk, saves individually to allow resume on failure.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const envContent = fs.readFileSync(path.join(ROOT, ".env"), "utf-8");
const envVars = {};
for (const line of envContent.split("\n")) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) envVars[m[1].trim()] = m[2].trim();
}
const GROQ_API_KEY = envVars.VITE_GROQ_API_KEY;

const GROQ_URL = "https://api.groq.com/openai/v1/audio/transcriptions";
const MODEL = "whisper-large-v3";
const CHUNK_DIR = "/tmp/m3-chunks";
const CHUNK_SECONDS = 300; // 5-min chunks
const PARTIAL_DIR = "/tmp/m3-transcripts";

fs.mkdirSync(PARTIAL_DIR, { recursive: true });

async function transcribeChunk(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: "audio/mpeg" });
  const formData = new FormData();
  formData.append("file", blob, path.basename(filePath));
  formData.append("model", MODEL);
  formData.append("language", "de");
  formData.append("response_format", "verbose_json");

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${GROQ_API_KEY}` },
    body: formData,
  });
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 150)}`);
  return await res.json();
}

async function main() {
  const chunks = fs.readdirSync(CHUNK_DIR).filter(f => f.endsWith(".mp3")).sort();
  let allSegments = [];

  for (let i = 0; i < chunks.length; i++) {
    const offset = i * CHUNK_SECONDS;
    const partialFile = path.join(PARTIAL_DIR, `${chunks[i]}.json`);

    let data;
    if (fs.existsSync(partialFile)) {
      console.log(`⏭️  Cached: ${chunks[i]} (offset ${offset}s)`);
      data = JSON.parse(fs.readFileSync(partialFile, "utf-8"));
    } else {
      console.log(`🎙️  Transcribing ${chunks[i]} (offset ${offset}s)...`);
      let attempt = 0;
      while (attempt < 3) {
        try {
          data = await transcribeChunk(path.join(CHUNK_DIR, chunks[i]));
          fs.writeFileSync(partialFile, JSON.stringify(data));
          console.log(`   ✅ ${(data.segments || []).length} segments`);
          break;
        } catch (e) {
          attempt++;
          console.log(`   ⚠️  attempt ${attempt} failed: ${e.message}. Retrying in 5s...`);
          await new Promise(r => setTimeout(r, 5000));
        }
      }
      if (!data) {
        console.error(`   ❌ Gave up on ${chunks[i]}`);
        continue;
      }
      await new Promise(r => setTimeout(r, 1000));
    }

    const segs = (data.segments || []).map(s => ({
      start: s.start + offset,
      end: s.end + offset,
      text: s.text,
    }));
    allSegments = allSegments.concat(segs);
  }

  const out = path.join(ROOT, "public/horen/module3/full-transcript.json");
  fs.writeFileSync(out, JSON.stringify(allSegments, null, 2));
  console.log(`\n✅ Saved ${allSegments.length} segments to full-transcript.json`);
  console.log(`   Coverage: ${allSegments[0]?.start.toFixed(0)}s → ${allSegments[allSegments.length-1]?.end.toFixed(0)}s`);
}

main().catch(e => { console.error(e); process.exit(1); });
