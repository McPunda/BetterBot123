module.exports = {
    name: 'Galaxy',
    aliases: ['galaxy', 'gl', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
		const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setTitle('Galaxy account')
			.setAuthor(`**Message from staff**`)
			.setColor(0xA652BB)
			.setDescription(`For the fastest help please do following
Give us your OrderID / Paypal InvoiceID
Screenshot of your order
Your Email
Screenshot from Epic Games showing account not working :)`);
		message.channel.send(embed);
		console.log(`${message.author} used Galaxy`);    
    }
}