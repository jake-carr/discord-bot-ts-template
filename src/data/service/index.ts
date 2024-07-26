import { getRepository } from "typeorm";
import { User } from "../entities/User";

export const createUser = async (username: string, discordId: string) => {
  const userRepository = getRepository(User);
  const user = new User();
  user.username = username;
  user.discordId = discordId;
  return await userRepository.save(user);
};

export const getUser = async (discordId: string) => {
  const userRepository = getRepository(User);
  return await userRepository.findOne({ where: { discordId } });
};

export const updateUser = async (discordId: string, username: string) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { discordId } });
  if (user) {
    user.username = username;
    return await userRepository.save(user);
  }
  return null;
};

export const deleteUser = async (discordId: string) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { discordId } });
  if (user) {
    return await userRepository.remove(user);
  }
  return null;
};
