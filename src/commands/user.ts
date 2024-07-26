import { Message } from "discord.js";
import { createUser, getUser, updateUser, deleteUser } from "../data/service";

export default async (message: Message, args: string[]) => {
  const subCommand = args.shift();
  const discordId = message.author.id;

  switch (subCommand) {
    case "create":
      await createUser(message.author.username, discordId);
      message.reply("User created!");
      break;

    case "get":
      const user = await getUser(discordId);
      if (user) {
        message.reply(`User found: ${user.username}`);
      } else {
        message.reply("User not found.");
      }
      break;

    case "update":
      const newUsername = args.join(" ");
      await updateUser(discordId, newUsername);
      message.reply("User updated!");
      break;

    case "delete":
      await deleteUser(discordId);
      message.reply("User deleted!");
      break;

    default:
      message.reply("Invalid subcommand. Use create, get, update, or delete.");
  }
};
