module.exports = {
    name: 'OnWatch',
    aliases: ['ow', 'watch', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin', 'Experienced Support'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
		const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setTitle('Ticket on wait')
			.setAuthor(`**Message from staff**`)
			.setColor(0xF8C300)
			.setDescription(`Thank you for the info.
as it is right now can't i confirm you are the actual owner of the order
So we have to wait for someone else to confirm it
Please wait for the person needed, and do not spam your ticket with when he will answer
Thank you for your understandig. :)`);
		message.channel.send(embed);
		console.log(`${message.author.tag} used watch`);    
    }
}