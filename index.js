const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

let botEnabled = false;

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  if (content === '!on') {
    botEnabled = true;
    message.reply('Bot is **ON**. Ready to trade.');
  } else if (content === '!off') {
    botEnabled = false;
    message.reply('Bot is **OFF**. No trades will be made.');
  } else if (content === '!status') {
    message.reply(`Bot is currently **${botEnabled ? 'ON' : 'OFF'}**.`);
  }
});

client.login(process.env.DISCORD_TOKEN);
