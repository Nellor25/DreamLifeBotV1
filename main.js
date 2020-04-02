const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN } = require("./config");
const { PREFIX } = require("./config");
const { IDENTIFIANTSLOUIS } = require("./config");
const { MDPLOUIS } = require("./config");
const { IDENTIFIANTSNELLO } = require("./config");
const { MDPNELLO } = require("./config");
var colors = require('colors');
const couleur = '#06DCF5';
// COMMANDES ECT [DREAMLIFE]

client.on('message', msg => {
if (msg.author.bot) return;
    const args = msg.content.split(/ +/g);
    const cmd = args.shift().toLowerCase();

  if (cmd === `${PREFIX}ping`) {
    msg.channel.send("Pong!");
  };

if (cmd === `${PREFIX}new`) {
    const DreamLifeGuild = client.guilds.cache.get('693863545531793498');
    const ticketexiste = DreamLifeGuild.channels.cache.find(channel => channel.name === `ticket-${msg.author.id}`);
    const SupportTicket = DreamLifeGuild.roles.cache.find(role => role.name === 'Support');
    const EveryoneTicket = DreamLifeGuild.roles.cache.find(role => role.name === '@everyone');
 
    if (!SupportTicket) {
      const NoSupport = new Discord.MessageEmbed()
      .setColor('#06DCF5')
      .addField(`Support`, `Aucun support n'est disponible`);
        msg.channel.send(NoSupport);
        return
    }

if (ticketexiste) {
    const DejaTicket = new Discord.MessageEmbed()
    .setColor('#06DCF5')
    .addField('DreamLife', `Vous avez déjà un ticket d'ouvert <#${ticketexiste.id}>`)
    msg.channel.send(DejaTicket);
    const msgticketopen = new Discord.MessageEmbed()
    .setColor(`${couleur}`)
    .addField('DreamLife', `Hey <@${msg.author.id}> voici votre ticket déjà existant !`)
    ticketexiste.send(msgticketopen);
    return
}

DreamLifeGuild.channels.create(`ticket-${msg.author.id}`, {
    type: 'text',
    permissionOverwrites : [
        {
            id: SupportTicket.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
            id: EveryoneTicket.id,
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
            id: msg.author.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
    

    ],
}).then(c => {

const ticketopenembed = new Discord.MessageEmbed()
.setAuthor('DreamLife Ticket', client.user.displayAvatarURL())
.setDescription(`Votre ticket vient d'être ouvert un membre du support va vous répondre le plus rapidement possible.`)
.addField('Status', '✅ Ouvert')
.setFooter('Ticket tools by Nellor')
.setTimestamp()

const merciembed = new Discord.MessageEmbed()
.setColor('#14D248')
.setTitle(`ticket-${msg.author.id} ouvert !`)
.setDescription(`Merci ${msg.author} ! Vous êtes maitenant en contact avec notre équipe d'assistance dans <#${c.id}> :pencil: `)
.setFooter('Ticket tools by Nellor')
.setTimestamp()

msg.channel.send(merciembed)
c.send(`[${SupportTicket}] , <@${msg.author.id}>`)
c.send(ticketopenembed)
})



}

if (cmd === `${PREFIX}close`) {

 if (!msg.channel.name.startsWith('ticket-')) {
const notcloseembed = new Discord.MessageEmbed()
.addField('DreamLife', '⚠️ Vous devez être dans un salon de ticket pour effectuer cette action.')
.setColor(`${couleur}`)
.setFooter('Ticket tools by Nellor')
.setTimestamp()
msg.channel.send(notcloseembed)
 return
 }

const confimationembed = new Discord.MessageEmbed()
.setFooter('Ticket tools by Nellor')
.setTimestamp()
.setColor(`${couleur}`)
.addField('Dream Life', 'Tapez \`CONFIRMER\` pour confirmer.')
msg.channel.send(confimationembed)
.then((m) => {
    msg.channel.awaitMessages(response => response.content === 'CONFIRMER', {
        max: 1,
        time: 15000,
        errors: ['time'],
    }) 
    .then((collected) => {
        msg.channel.delete();
    })
    .catch(() => {
        m.edit('').then(m2 => {
            m2.delete();
        }, 3000);
    });
});

}

if (cmd === `${PREFIX}force-close`) {

    if (!msg.channel.name.startsWith('ticket-')) {
        const notcloseembed = new Discord.MessageEmbed()
        .addField('DreamLife', '⚠️ Vous devez être dans un salon de ticket pour effectuer cette action.')
        .setColor(`${couleur}`)
        .setFooter('Ticket tools by Nellor')
        .setTimestamp()
        msg.channel.send(notcloseembed)
         return
         }
         
         if(msg.channel.name.startsWith('ticket-')) {

            const closestaffembed = new Discord.MessageEmbed()

            .setTitle('Fermeture du ticket')
            .setDescription(`La fermeture du ticket à été demandé par un membre de l'assistance.`)
            .addField('Le salon sera surppimé dans', '15 secondes')
            .setColor(`${couleur}`)
            .setFooter('Ticket tools by Nellor')
            .setTimestamp()
            msg.channel.send(closestaffembed)
            msg.channel.delete();
            

         }


}

if (cmd === `${PREFIX}username`) {
    msg.channel.send(msg.author.username)
    msg.channel.send("ID:" + msg.author.id)
};



if (cmd === `${PREFIX}error`) {

    const ErrorEmbed = new Discord.MessageEmbed()
    .setAuthor('Dream Life [BOT] ERREUR', 'https://cdn.discordapp.com/emojis/624390564414095370.gif?v=1')
    .setTimestamp()
    .setDescription('Une Erreur à été détécté !')
    .addField('Erreurs', '0')
    .setFooter('Bot status & détéctions by Nellor')
    .setColor('#EE2D0A')
    .setThumbnail(client.user.displayAvatarURL());
    msg.channel.send(ErrorEmbed);

};

if (cmd === `${PREFIX}debug`) {
const debug = new Discord.MessageEmbed()
.setAuthor(client.user.username)
.setDescription('**Débugage de Dream Life Bot**')
.addField('Status', 'Débugage en cours...')
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

client.on("error", () => {
    const dllog = client.channels.cache.get("694116515707879445");
    const ErrorEmbed = new Discord.MessageEmbed()
    .setAuthor('Dream Life [BOT] ERREUR', 'https://cdn.discordapp.com/emojis/624390564414095370.gif?v=1')
    .setTimestamp()
    .setDescription('Une Erreur à été détécté !')
    .addField('Erreurs', '1')
    .setFooter('Bot status & détéctions by Nellor')
    .setColor('#EE2D0A')
    .setThumbnail(client.user.displayAvatarURL());
    dllog.send(ErrorEmbed);
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