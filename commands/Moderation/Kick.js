module.exports = {
    name: 'kick',
    aliases: ['alias1', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
      
		if(!message.member.roles.some(r=>['HVH BIG NAMER$$', 'Owner', 'Superior.', 'Admin', 'Experienced Support', 'Support Team'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}

		const member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member) {return message.reply('Please mention a valid member of this server');}
		if(!member.kickable) {return message.reply('I cannot kick this user! Do they have a higher role? Do I have kick permissions?');}

		let reason = args.slice(1).join(' ');
		if(!reason) reason = 'No reason provided';

		await member.kick(reason)
			.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
		message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);  
    }
}