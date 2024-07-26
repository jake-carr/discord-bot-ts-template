import { EmbedBuilder, ColorResolvable } from "discord.js";

const defaultColor = "#0099ff";

export const createEmbed = (
  title: string,
  description: string,
  color: ColorResolvable = defaultColor
) => {
  return new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(color);
};
