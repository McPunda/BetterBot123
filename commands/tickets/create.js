module.exports = {
    name: 'createticket',
    aliases: ['create', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        const sayMessage = args.join(" ");
        let name = message.author.username;
        const channel = await message.guild.createChannel(`${message.author.username} ${sayMessage}`, 'text')
        await channel.setParent('644617887922782231');
        await message.reply(`Ticket Made ${message.author.username}-${sayMessage}`)
        if (!channel.parent) {
	return console.log('This channel is not listed under a category');
}
channel.lockPermissions()
channel.overwritePermissions(channel.guild.defaultRole, { VIEW_CHANNEL: false });
channel.overwritePermissions(message.author.id, { VIEW_CHANNEL: true });
    }}