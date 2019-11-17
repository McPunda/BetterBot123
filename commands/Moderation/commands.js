module.exports = {
    name: 'commands',
    aliases: ['cmd', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
		const { RichEmbed } = require("discord.js");
     		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setTitle('All Commands')
			.setAuthor(`**Message from staff**`)
			.setColor(0xF93A2F)
			.setDescription(`here is a list of all commands

/blackknight & /bka  Opens Instructions for a Black knight case

/galaxy & /gl Opens Instructions for a Galaxy case

/ikonik & /ika Opens Instructions for an Ikonik case
			
/feedback & /fba Opens Instructions for a feedback account case
			
/oacc	Opens Instructions for another account case
			
/rpn	Opens Instructions for a replacement not working case

/create [name] creates a ticket named after what you need. FX /create [BK] and it will create a ticket named your name and BK after.

/help	Opens Instructions menu`);
		message.channel.send(embed);
		console.log(`${message.author.tag} used cmd`);   
    }
}