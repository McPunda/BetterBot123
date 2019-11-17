module.exports = {
    name: 'ENGB4UBUY',
    aliases: ['eb4b', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
        message.delete().catch(()=>{});
        message.channel.send(`**If your account does not work you have within 45 minutes from the purchased time to make a ticket on our discord server.

All accounts are “Non Full Access” (NFA), meaning that these accounts DO NOT come with email access.
        
You are purchasing this knowing that the original owner has the chance to pull back the account at any moment. It is the “buyers” responsibility to secure the account.
        
Chargebacks are prohibited under all circumstances.
If you chargeback then request support, we will not help you until the chargeback/dispute is cancelled. If you fail to comply, you will be blacklisted from “Fortnite World.”
        
“Fortnite World” does not provide refunds.
        
“Fortnite World” will only provide replacements for non-working accounts.
        
Accounts from “Fortnite World” cannot always be linked to consoles. Only some accounts can be linked to consoles.**`)

    }}