/**
 * Service to load pre-generated audio transcripts.
 * Transcripts are stored as JSON files in src/data/transcripts/
 * and bundled with the app at build time via dynamic imports.
 */

export interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
}

export interface Transcript {
  file: string;
  text: string;
  segments: TranscriptSegment[];
  duration: number;
}

// Cache loaded transcripts in memory
const cache: Record<string, Transcript | null> = {};

/**
 * Load a transcript by module and filename (without .mp3 extension).
 * Example: loadTranscript("module1", "model1-tail1-text1")
 */
export async function loadTranscript(
  module: string,
  fileName: string
): Promise<Transcript | null> {
  const key = `${module}-${fileName}`;
  if (key in cache) return cache[key];

  try {
    // Vite handles this as a static JSON import at build time.
    const data = await import(`../data/transcripts/${key}.json`);
    const transcript: Transcript = data.default || data;
    cache[key] = transcript;
    return transcript;
  } catch {
    cache[key] = null;
    return null;
  }
}
