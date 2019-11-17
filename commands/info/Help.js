module.exports = {
    name: 'help',
    aliases: ['alias1', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setTitle('Help Instructions')
			.setAuthor(`**Message from staff**`)
			.setColor(0xF93A2F)
			.setDescription(`For help with a Black knight account type /bka and instructions for fastest help will appear!

For help with a Galaxyt account type /gl and instructions for fastest help will appear!

For help with a Ikonik account type /ika and instructions for fastest help will appear!
			
If you have submitted positive feedback and are here for a free account type /fba
			
If you don't need help for those but other accounts please type /oacc
			
If you got a replacement that didn't work please type /rpn
			
**You have 5min to type something in here, if you don't we will close the ticket!!`);
		message.channel.send(embed);
		console.log(`${message.author.tag} used Help`);    
    }
}