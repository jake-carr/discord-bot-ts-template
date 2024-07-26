import { Message } from "discord.js";
import { createEmbed } from "../ui/embeds";

export default (message: Message, args: string[]) => {
  const embed = createEmbed("Ping Command", "Pong!");
  message.reply({ embeds: [embed] });
};
