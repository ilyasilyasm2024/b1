import { loadTranscript } from "../repositories/transcripts";

export type { Transcript, TranscriptSegment } from "../repositories/transcripts";

export const transcriptsService = {
  load: (module: string, fileName: string) => loadTranscript(module, fileName),
};
