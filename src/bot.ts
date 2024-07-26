import { Client, GatewayIntentBits } from "discord.js";
import { config } from "./config";
import { handleCommand } from "./commands";
import { connectDatabase } from "./data";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once("ready", async () => {
  console.log("Bot is online!");
  await connectDatabase();
});

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();

  if (command) {
    await handleCommand(command, message, args);
  }
});

client.login(config.token);
