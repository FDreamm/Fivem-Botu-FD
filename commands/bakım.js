const Discord = require('discord.js');


exports.run = async(client, message, args) => {
	message.delete({ timeout: 1 });
if( !message.member.roles.cache.has('802357134960230422') && !message.member.roles.cache.has('712770368565411882') && !message.member.roles.cache.has('697152886064545832') && !message.member.roles.cache.has('712770372205805574') && !message.member.roles.cache.has('712770372877156432') && !message.member.roles.cache.has('712770373095129109') && !message.member.roles.cache.has('712770374097436743') && !message.member.roles.cache.has('738105206864216065')) return message.channel.send(`**Bu komutu sadece yetkililer kullanabilir!**`)

const bakım = args.slice(0).join(' ')
if(!bakım) {
	
	return message.channel.send
	(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`**${message.author}**, bir saat belirtmedin.`)
	).then(msg => {
					message.delete({ timeout: 10000 });
			})
}

if (args) {
		
	
	message.channel.send(`@everyone`,
	new Discord.MessageEmbed()
	.setTitle("**Arkadaşlarını Davet Et**")
	.setAuthor("FDream")
  	.setColor('#FF0000')
	.setFooter(`${message.author.username} tarafından gönderildi!`, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	.setImage("https://cdn.discordapp.com/attachments/808333220005412906/810895500257263646/ezgif.com-gif-maker.png")
	.setTimestamp()
	.setURL("https://discord.gg/")
	.addField(`Sunucu Bakıma Alınacaktır.\nBakım Saati : ${bakım} `, "V1.0"))
  }
}
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori : "admin"
};
 
exports.help = {
  name: 'bakım',
  description: 'Tüm komutları gösterir.',
  usage: 'bakım'
};