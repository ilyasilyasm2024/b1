import { sprechenRepository, uploadAudioToCloudinary } from "../repositories/sprechen";

export type { SprechenRecording } from "../repositories/sprechen";

export const sprechenService = {
  // The audio goes to Cloudinary; the backend only stores its url and id.
  upload: (audio: Blob) => uploadAudioToCloudinary(audio),

  save: (moduleId: string, teil: string, audioUrl: string, publicId: string, duration: number) =>
    sprechenRepository.save(moduleId, teil, audioUrl, publicId, duration),

  getRecordings: (moduleId: string, teil: string) => sprechenRepository.getRecordings(moduleId, teil),

  delete: (id: string) => sprechenRepository.delete(id),
};
