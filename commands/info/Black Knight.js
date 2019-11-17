module.exports = {
    name: 'BlackKnight',
    aliases: ['bka', 'blackknight', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        const { RichEmbed } = require("discord.js");
    		// eslint-disable-next-line no-empty-function
		message.delete().catch(()=>{});
		const embed = new RichEmbed()
			.setColor('#0099ff')
			.setTitle('Black Knight Account Spanish/English')
			.setAuthor(`**Message from staff**`)
			.setDescription('Follow the things said below to get fast help')
			.setThumbnail('https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png')
			.addBlankField()
			.addField('Black Knight  [English]', `For the fastest help please do following
										  Give us your OrderID / Paypal InvoiceID
										  Screenshot of your order
										  Your Email
										  Screenshot from Epic Games showing account not working :)`, true)
			.addField('Black Knight  [Spanish]', `Para obtener la ayuda más rápida, haga lo siguiente
											  Danos tu OrderID / Paypal InvoiceID
											  Captura de pantalla de tu pedido
											  Tu correo electrónico
											  Captura de pantalla de Epic Games que muestra que la cuenta no funciona`, true)
			.setTimestamp()
			.setFooter('FNWorld Support Team', 'https://i.gyazo.com/ab2a224a69555658e2118109650974bf.png');
		message.channel.send(embed);    
    }
}