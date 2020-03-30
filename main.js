const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN } = require("./config");
const { PREFIX } = require("./config");
const { IDENTIFIANTSLOUIS } = require("./config");
const { MDPLOUIS } = require("./config");
const { IDENTIFIANTSNELLO } = require("./config");
const { MDPNELLO } = require("./config");


// COMMANDES ECT [DREAMLIFE]

client.on('message', msg => {
if (msg.author.bot) return;
    const args = msg.content.split(/ +/g);
    const cmd = args.shift().toLowerCase();

  if (cmd === `${PREFIX}ping`) {
    msg.channel.send("Pong!");
  };
  if (cmd === `${PREFIX}owner`) {
    msg.channel.send(`Fondateur ${client.guild.ownerID}!`);
};

if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(" "));
    const channellogs = client.channels.cache.get("693935924655947887");
    msg.delete().then(console.log(`Message supprimé: ${msg.content}, Auteur: ${msg.author.username}`));

};

if (cmd === `${PREFIX}login-${IDENTIFIANTSLOUIS}-${MDPLOUIS}`) {
    if (!msg.content === `${PREFIX}login-${IDENTIFIANTSLOUIS}-${MDPLOUIS}`) return msg.member.send('Commande de login incorrecte veuillez vérifier vos identifiants');
    const Fondateur = msg.guild.roles.cache.get('693894939288797194');
    msg.member.send('Identifiants OK, Vous êtes reconnu en tant que Louis.');
    msg.delete();
    msg.member.roles.add(Fondateur);
};

if (cmd === `${PREFIX}login-${IDENTIFIANTSNELLO}-${MDPNELLO}`) {
    if (!msg.content === `${PREFIX}login-${IDENTIFIANTSNELLO}-${MDPNELLO}`) return msg.member.send('Commande de login incorrecte veuillez vérifier vos identifiants');
    const Fondateur = msg.guild.roles.cache.get('693894939288797194');
    msg.member.send('Identifiants OK, Vous êtes reconnu en tant que Nello.');
    msg.delete();
    msg.member.roles.add(Fondateur);
};


});

// LOGS

client.on("guildMemberAdd", member => {
    const JoinEmbed = new Discord.MessageEmbed()
    .setColor('#06DCF5')
    .setTitle(`Bon jeu et bonne aventure sur l'île !`)
    .setAuthor(`🥳 Bienvenue sur Dream Life`)
    .setDescription(`Bienvenue ${member} et n'oublie pas de lire les règles et les informations importantes dans : <#693865109411463248>`)
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Dream Life - Limitez vous à votre imagination.", 'https://image.noelshack.com/fichiers/2020/14/1/1585565853-test-epso-de-raisonnement-numerique-3-fr.jpg');

    const JoinEmbedLog = new Discord.MessageEmbed()
    .setColor('#07F50F')
    .setAuthor(member.user.username, member.user.displayAvatarURL())
    .setDescription(`✅ ${member} à rejoint le serveur.`)
    .addField("Création du compte", member.user.createdAt)
    .setFooter(`ID : ${member.user.id}`)
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL())

    const acceuil = client.channels.cache.get("693865657732956190");
    const channellogs = client.channels.cache.get("693935924655947887");
    acceuil.send(JoinEmbed);
    channellogs.send(JoinEmbedLog);
});

client.on("guildMemberRemove", member => {
    const LeaveEmbedLog = new Discord.MessageEmbed()
    .setColor('#DC2317')
    .setAuthor(member.user.username, member.user.displayAvatarURL())
    .setDescription(`❌ ${member} à quitter le serveur`)
    .setFooter(`ID : ${member.user.id}`)
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL())

    const channellogs = client.channels.cache.get("693935924655947887");
    channellogs.send(LeaveEmbedLog);
});


client.login(TOKEN);

// CLIENT READY [DREAMLIFE]

client.on('ready', () => console.log('*----------- BOT DREAM LIFE START -----------*'));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);