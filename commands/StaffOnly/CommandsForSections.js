module.exports = {
    name: 'CommandsForSections',
    aliases: ['sectioncmd', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
		const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setTitle('Ticket on wait')
			.setAuthor(`**Message to staff**`)
			.setColor(0xF8C300)
			.setDescription(`
All role commands so far is:
            
/rolescmd for role commands
            
/termedcmd for termed commands
            
/ticketscmd For Experienced Support (When made)`);
		message.channel.send(embed);
		console.log(`${message.author.tag} used watch`);    
    }
}