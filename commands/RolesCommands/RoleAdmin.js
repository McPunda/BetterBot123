module.exports = {
    name: 'RoleAdmin',
    aliases: ['admin', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
        let role = message.guild.roles.find(r => r.name === "Admin");

        // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
        let member = message.mentions.members.first();
        
        // or the person who made the command: let member = message.member;
        
        // Add the role!
        member.addRole(role).catch(console.error);
        
        // Remove a role!
        member.removeRole(role).catch(console.error);}}