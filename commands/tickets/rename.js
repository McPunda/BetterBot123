module.exports = {
    name: 'Renameticket',
    aliases: ['rt', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin', 'Experienced Support'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
     		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const sayMessage = args.join(' ');
		message.channel.setName(sayMessage)
			.catch(console.error);
		console.log(`${message.author.tag} used rename`);   
    }
}