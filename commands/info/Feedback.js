module.exports = {
    name: 'Feedback',
    aliases: ['feedback', 'fba', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        const { RichEmbed } = require("discord.js");
     		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setTitle('Feedback Account')
			.setAuthor(`**Message from staff**`)
			.setColor(0xCC7900)
			.setDescription(`To get a feedback account please provide following
OrderID
Email
Screenshot Of positive feedback
After this Support will be with you asap :)`);
		message.channel.send(embed);
		console.log(`${message.author.tag} used feedback`);   
    }
}