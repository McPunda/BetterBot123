module.exports = {
    name: 'OtherAccounts',
    aliases: ['oacc', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setColor('#0099ff')
			.setTitle('Other Accounts Spanish/English')
			.setAuthor(`**Message from staff**`)
			.setThumbnail('https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png')
			.addBlankField()
			.addField('Other Accounts  [English]', `For the fastest help please do following
Give us your OrderID / Paypal InvoiceID
Screenshot of your order
Your Email
Screenshot from Epic Games showing account not working :)`, true)
.addField('Other Accounts  [Spanish]', `Para la ayuda mas rápida porfavor haga lo siguiente 
Denos
La I’d dela orden /ID de factura de PayPal
Foto de los detalles de la compra  
Su email 
Y una foto mostrando que la cuenta no funciona en epic games`, true)
			.setTimestamp()
			.setFooter('FNWorld Support Team', 'https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png');
		message.channel.send(embed);    
    }
}