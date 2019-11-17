module.exports = {
    name: 'TicketCommands',
    aliases: ['ticketcmd', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
        message.delete().catch(()=>{});
        message.channel.send(`
All commands after we get termed.

/app Approving the ticket
                
/ow Waiting for confirmation from another staff member
                
/deny to Deny a ticket
                
/rename to rename the ticket you are in`,
        )}}