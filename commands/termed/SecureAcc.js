module.exports = {
    name: 'Freeacc',
    aliases: ['secacc', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
        message.delete().catch(()=>{});
        message.channel.send(`** f you are new to purchasing, you probably don’t know how to secure these accounts. Here’s a short little guide.

Starting out, if the account is VERIFIED, you can do the following: Add 2 FACTOR Authentication, Change Password, and unlink all consoles on the account. This will prevent anyone else to log in to the account and let you keep the account for a while.
If the account is UNVERIFIED, you can change the password of the account. It will restrict their access from logging into the account.
There is also a possibility that you can login to the email of the accounts, but we do not guarantee anything. Make sure to follow these rules to keep your account in your possession as long as you can.
        
if your accounts get taken back we can’t help neither give you a replacement, the tips above is what i have learned over the past year selling accounts.**`,
        )}}