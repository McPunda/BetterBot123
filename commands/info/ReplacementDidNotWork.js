module.exports = {
    name: 'ReplacementNotWorking',
    aliases: ['rpn', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
		const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setTitle('Replacement didn\'t work')
			.setAuthor(`**Message from staff**`)
			.setColor(0xF93A2F)
			.setDescription(`For the fastest help please do following
Give us your oderID from the purchase
Give us your Email
send a screenshot of the replacement not working on epic games`);
		message.channel.send(embed);
		console.log(`${message.author.tag} used rpn`);    
    }
}