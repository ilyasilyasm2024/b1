/**
 * Transcribe all Hören mp3 files using Groq's Whisper API.
 * Saves transcripts as JSON files in src/data/transcripts/
 *
 * Usage: node scripts/transcribe.mjs
 *
 * Requires: VITE_GROQ_API_KEY in .env (already set)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Load .env manually (simple key=value parser)
const envPath = path.join(ROOT, ".env");
const envContent = fs.readFileSync(envPath, "utf-8");
const envVars = {};
for (const line of envContent.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) envVars[match[1].trim()] = match[2].trim();
}

const GROQ_API_KEY = envVars.VITE_GROQ_API_KEY;
if (!GROQ_API_KEY) {
  console.error("❌ VITE_GROQ_API_KEY not found in .env");
  process.exit(1);
}

const GROQ_URL = "https://api.groq.com/openai/v1/audio/transcriptions";
const MODEL = "whisper-large-v3";

// Directories to scan for mp3s
const AUDIO_DIRS = [
  path.join(ROOT, "public/horen/module1"),
  path.join(ROOT, "public/horen/module2"),
];

const OUTPUT_DIR = path.join(ROOT, "src/data/transcripts");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function transcribeFile(filePath) {
  const fileName = path.basename(filePath);
  const moduleName = path.basename(path.dirname(filePath)); // module1 or module2

  console.log(`🎙️  Transcribing: ${moduleName}/${fileName}`);

  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: "audio/mpeg" });

  const formData = new FormData();
  formData.append("file", blob, fileName);
  formData.append("model", MODEL);
  formData.append("language", "de");
  formData.append("response_format", "verbose_json");

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error(`   ❌ Failed (${res.status}): ${errText.slice(0, 200)}`);
    return null;
  }

  const data = await res.json();
  return {
    file: `${moduleName}/${fileName}`,
    text: data.text || "",
    segments: (data.segments || []).map((s) => ({
      start: s.start,
      end: s.end,
      text: s.text,
    })),
    duration: data.duration || 0,
  };
}

async function main() {
  const allFiles = [];
  for (const dir of AUDIO_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mp3")).sort();
    for (const file of files) {
      allFiles.push(path.join(dir, file));
    }
  }

  console.log(`\n📂 Found ${allFiles.length} mp3 files to transcribe.\n`);

  const results = {};

  for (let i = 0; i < allFiles.length; i++) {
    const filePath = allFiles[i];
    const moduleName = path.basename(path.dirname(filePath));
    const fileName = path.basename(filePath, ".mp3");
    const key = `${moduleName}/${fileName}`;

    // Skip if already transcribed
    const outFile = path.join(OUTPUT_DIR, `${moduleName}-${fileName}.json`);
    if (fs.existsSync(outFile)) {
      console.log(`   ⏭️  Already done: ${key}`);
      const existing = JSON.parse(fs.readFileSync(outFile, "utf-8"));
      results[key] = existing;
      continue;
    }

    const result = await transcribeFile(filePath);
    if (result) {
      results[key] = result;
      fs.writeFileSync(outFile, JSON.stringify(result, null, 2));
      console.log(`   ✅ Done (${result.duration?.toFixed(1)}s)`);
    }

    // Small delay between requests to be polite to the API
    if (i < allFiles.length - 1) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  // Write a combined index file
  const indexPath = path.join(OUTPUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(results, null, 2));
  console.log(`\n✅ All done! ${Object.keys(results).length} transcripts saved to src/data/transcripts/`);
  console.log(`   Combined index: src/data/transcripts/index.json\n`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
