import { Message } from "discord.js";
/**
 *
 * @param command
 * No need to update the command handler with every command name.
 * The bot dynamically imports commands based on the file name.
 * Just make sure the command file name matches the command name.
 * @param message
 * @param args
 */
export const handleCommand = async (
  command: string,
  message: Message,
  args: string[]
) => {
  try {
    const commandModule = await import(`./${command}`);
    if (commandModule.default) {
      commandModule.default(message, args);
    } else {
      message.reply("Unknown command");
    }
  } catch (error) {
    message.reply("Error executing command");
    console.error(error);
  }
};
