module.exports = {
    name: 'TermedCommands',
    aliases: ['termedcmd', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
        message.delete().catch(()=>{});
        message.channel.send(`
All commands after we get termed.
        
/secacc SecureAccout
        
/fa FreeAccount
        
/eb4b English Before you buy
        
/arabtos Arabic Tos`,
        )}}