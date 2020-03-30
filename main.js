const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN } = require("./config");
const { PREFIX } = require("./config");

client.on('ready', () => {
  console.log(`Client démarré ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) {
    msg.channel.send("Pong!");
  };
  if (msg.content.startsWith(`${PREFIX}owner`)) {
    msg.channel.send(`Fondateur ${guild.ownerID}!`);
}
});

client.login(TOKEN);