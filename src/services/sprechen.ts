import { api } from "./api";

const CLOUDINARY_CLOUD = "ijwioydx";
const CLOUDINARY_PRESET = "b1-sprechen";

export interface SprechenRecording {
  _id: string;
  moduleId: string;
  teil: string;
  audioUrl: string;
  publicId: string;
  duration: number;
  createdAt: string;
}

export async function uploadAudioToCloudinary(audioBlob: Blob): Promise<{ url: string; publicId: string; duration: number } | null> {
  const formData = new FormData();
  formData.append("file", audioBlob, "recording.webm");
  formData.append("upload_preset", CLOUDINARY_PRESET);
  formData.append("resource_type", "video"); // Cloudinary uses "video" for audio

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/video/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.secure_url) {
      return {
        url: data.secure_url,
        publicId: data.public_id,
        duration: Math.round(data.duration || 0),
      };
    }
    return null;
  } catch {
    return null;
  }
}

export const sprechenService = {
  save: (moduleId: string, teil: string, audioUrl: string, publicId: string, duration: number) =>
    api.post<SprechenRecording>("/sprechen", { moduleId, teil, audioUrl, publicId, duration }),

  getRecordings: (moduleId: string, teil: string) =>
    api.get<SprechenRecording[]>(`/sprechen/${moduleId}/${teil}`),

  delete: (id: string) =>
    api.delete<{ message: string; publicId: string }>(`/sprechen/${id}`),
};
