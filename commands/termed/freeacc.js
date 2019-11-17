module.exports = {
    name: 'Freeacc',
    aliases: ['fa', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
        message.delete().catch(()=>{});
        message.channel.send(`**Do you want a FREE account? Look no further!

When you make a purchase from our shop, you will see a part on the bottom right that gives you the option to leave a rating. Leave a positive rating on the shop, and create a ticket in the support discord. We will give you a FREE 10-19+ skinned account for doing almost NOTHING! Don’t miss your opportunity! 
1 per person**`)
        
        }}