import { schreibenRepository } from "../repositories/schreiben";

export type { SchreibenVersion } from "../repositories/schreiben";

export const schreibenService = {
  saveVersion: (moduleId: string, aufgabeId: number, text: string) =>
    schreibenRepository.saveVersion(moduleId, aufgabeId, text),

  getVersions: (moduleId: string, aufgabeId: number) => schreibenRepository.getVersions(moduleId, aufgabeId),

  deleteVersion: (id: string) => schreibenRepository.deleteVersion(id),
};
