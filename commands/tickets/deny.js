module.exports = {
    name: 'DenyTicket',
    aliases: ['deny', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin', 'Experienced Support'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
		const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setColor('#0099ff')
			.setTitle('Ticket Denied English/Spanish')
			.setAuthor(`**Message from staff**`)
			.setThumbnail('https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png')
			.addBlankField()
			.addField('Denied  [English]', `Thank you for the info.
Unfortunately can't we give you a replacement.
Hope you understand.
We will close the ticket in 5 min after this message.`, true)
			.addField('Denied  [Spanish]', `Gracias por la información.
Desafortunadamente no le podemos dar un remplazo 
Espero entienda
Borraremos el ticket en 5 minutos después de este mensaje `, true)
			.setTimestamp()
			.setFooter('FNWorld Support Team', 'https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png');
		message.channel.send(embed);    
    }
}