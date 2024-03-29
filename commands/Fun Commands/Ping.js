module.exports = {
    name: 'ping',
    aliases: ['ping', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        const m = await message.channel.send('Ping?');
		m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
}