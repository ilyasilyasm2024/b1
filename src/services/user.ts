import { userRepository } from "../repositories/user";

export type { User } from "../repositories/user";

export const userService = {
  getProfile: () => userRepository.getProfile(),

  completeTour: () => userRepository.completeTour(),
};
