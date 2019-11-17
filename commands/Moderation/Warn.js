module.exports = {
	name: "Warningsnene",
    aliases: ['warn', 'alias2', 'alias3'],
    category: "moderation",
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
		const { RichEmbed } = require("discord.js");
		const reason = args.slice(1).join(' ');
		const member = message.mentions.members.first();
		const embed = new RichEmbed()
			.setTitle('Warning')
			.setAuthor(`**Message from staff**`)
			.setColor(0x00D166)
			.setDescription(`You have been warned ${member}
			Reason: ${reason}`);
		message.channel.send(embed);
		console.log(` ${member} got warned for ${reason}`);
    }
}