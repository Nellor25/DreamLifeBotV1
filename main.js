const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN } = require("./config");
const { PREFIX } = require("./config");
const { IDENTIFIANTSLOUIS } = require("./config");
const { MDPLOUIS } = require("./config");
const { IDENTIFIANTSNELLO } = require("./config");
const { MDPNELLO } = require("./config");
var colors = require('colors');
// COMMANDES ECT [DREAMLIFE]

client.on('message', msg => {
if (msg.author.bot) return;
    const args = msg.content.split(/ +/g);
    const cmd = args.shift().toLowerCase();

  if (cmd === `${PREFIX}ping`) {
    msg.channel.send("Pong!");
  };

if (cmd === `${PREFIX}debug`) {
const debug = new Discord.MessageEmbed()
.setAuthor(client.user.username)
.setDescription('**Débugage de Dream Life Bot**')
.addField('Status', 'Débugage en cours')
.setThumbnail('https://cdn130.picsart.com/298137588301201.gif?to=min&r=480')
.setTimestamp()
.setFooter('Administration produit by Nellor')
.setColor('#06DCF5');
msg.channel.send(debug);
};

if (cmd === `${PREFIX}bot-infos`) {
    const infobot = new Discord.MessageEmbed()
.setTitle(". Information")
.setAuthor("Dream - Life [Bot]", 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png','https://github.com/Nellor25/DreamLifeBotV1')
.setColor('#06DCF5')
.setDescription('Dream Life bot à été crée par <@273927787671453707> pour gérer et accompagner la communauté Dream Life Arma 3. Co-Gérant du bot <@306509129738878976>')
.addField('Github', 'https://github.com/Nellor25/DreamLifeBotV1')
.setFooter('Dream Life bot, Crée par Nellor')
.setThumbnail(client.user.displayAvatarURL())
.setTimestamp();
msg.channel.send(infobot)
};

if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(" "));
    const channellogs = client.channels.cache.get("693935924655947887");
    msg.delete().then(console.log(`Message supprimé: ${msg.content}, Auteur: ${msg.author.username}`));

};

//                           *---------- LOGIN DE SECOURS ------------*

if (cmd === `${PREFIX}login-${IDENTIFIANTSLOUIS}-${MDPLOUIS}`) {
    if (!msg.content === `${PREFIX}login-${IDENTIFIANTSLOUIS}-${MDPLOUIS}`) return msg.member.send('Commande de login incorrecte veuillez vérifier vos identifiants');
    const Fondateur = msg.guild.roles.cache.get('693894939288797194');
    msg.delete();
const LouisEmbed = new Discord.MessageEmbed()
.setAuthor('Dream Life Logging')
.setDescription('Loggin réussit !')
.addField('Connecté en tant que :', `Louis Vauclin sous le pseudo de ${msg.member.user.username}`)
.addField('Grade doné :', '「🎖️」Fondateur')
.setColor('#15D015')
.setFooter('Administration Loggin by Nellor')
.setTimestamp()
.setThumbnail('https://about.fb.com/wp-content/uploads/2018/08/privacy-001.jpeg?fit=1920%2C1080');
msg.member.send(LouisEmbed);
    msg.member.roles.add(Fondateur);
    console.log(`⚠️-Louis a utilisé le force login sous le pseudo de ${msg.member.user.username} -⚠️`.underline.red);
};

if (cmd === `${PREFIX}login-${IDENTIFIANTSNELLO}-${MDPNELLO}`) {
    if (!msg.content === `${PREFIX}login-${IDENTIFIANTSNELLO}-${MDPNELLO}`) return msg.member.send('Commande de login incorrecte veuillez vérifier vos identifiants');
    const Fondateur = msg.guild.roles.cache.get('693894939288797194');
    msg.delete();
    msg.member.roles.add(Fondateur);
    const NellorEmbed = new Discord.MessageEmbed()
.setAuthor('Dream Life Logging')
.setDescription('Loggin réussit !')
.addField('Connecté en tant que :', `Nellor sous le pseudo de ${msg.member.user.username}`)
.addField('Grade doné :', '「🎖️」Fondateur')
.setColor('#15D015')
.setFooter('Administration Loggin by Nellor')
.setTimestamp()
.setThumbnail('https://about.fb.com/wp-content/uploads/2018/08/privacy-001.jpeg?fit=1920%2C1080');
msg.member.send(NellorEmbed);
console.log(`⚠️- Nellor a utilisé le force login sous le pseudo de ${msg.member.user.username} -⚠️`.underline.red);
};

if (cmd === `${PREFIX}embed`) {
    const EmbedEmbed = new Discord.MessageEmbed()
    .setDescription(args.join(" "))
    .setColor('#06DCF5')
    msg.delete();
    msg.channel.send(EmbedEmbed);
};


});

//                              *-------- LOGS et WELCOME --------*

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

client.on('ready', () => {
    const dllog = client.channels.cache.get("694116515707879445");
    const DreamLifeGuild = client.guilds.cache.get('693863545531793498');
    let memberCount = DreamLifeGuild.memberCount;
    const OnlineEmbed = new Discord.MessageEmbed()
    .setAuthor('Dream Life [BOT] Status', 'https://cdn.discordapp.com/emojis/647816186888847360.gif?v=1')
    .setTimestamp()
    .setDescription('Bot mis en route !')
    .addField('Status', '✅ Online')
    .addField('Erreurs', '0')
    .addField('🙋‍♂️ Nombres de membres sur Dream Life', memberCount)
    .setFooter('Bot status & détéctions by Nellor')
    .setColor('#07F50F')
    .setThumbnail(client.user.displayAvatarURL());
    dllog.send(OnlineEmbed);
});

client.login(TOKEN);

// CLIENT READY [DREAMLIFE]
client.on('ready', () => console.log("*----------- BOT DREAM LIFE START -----------*".green));
client.on('ready', () => {
    const DreamLifeGuild = client.guilds.cache.get('693863545531793498');
    let memberCount = DreamLifeGuild.memberCount;
    console.log(`Nombre de personnes sur DreamLife : ${memberCount}`.bold.yellow);
   });
   
client.on('ready', () => client.user.setActivity('Assistant Personel de Nellor et TheFloPower, Dream Life à votre service !', {type: 'LISTENING'}));
client.on("error", console.error);