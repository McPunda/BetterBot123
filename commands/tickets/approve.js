module.exports = {
    name: 'ApproveTicket',
    aliases: ['app', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin', 'Experienced Support'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
		const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setColor('#0099ff')
			.setTitle('Ticket Approved English/Spanish')
			.setAuthor(`**Message from staff**`)
			.setThumbnail('https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png')
			.addBlankField()
			.addField('Approved  [English]', `Thank you, i have checked everything and it seems okay,
I will let staff know that you need a replacement, in the meantime please just wait
and for god sake do not spam the ticket asking when you'll get the account,
You will get it when we have time to give it
Thank you for understanding :)`, true)
			.addField('Approved  [Spanish]', `Gracias, hemos comprobado todo y parece que está bien,
Le dejaré saber al staff que necesita un remplazo, mientras tanto espere y sea paciente,
Y por lo que más quiera no esté preguntando cuando le darán su cuenta, 
Le darán su cuenta cuando tengan tiempo 
Gracias por entender :)`, true)
			.setTimestamp()
			.setFooter('FNWorld Support Team', 'https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png');
		message.channel.send(embed);    
    }
}