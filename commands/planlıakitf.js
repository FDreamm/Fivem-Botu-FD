const Discord = require('discord.js');


exports.run = async(client, message, args) => {
	message.delete({ timeout: 1 });
if( !message.member.roles.cache.has('802357134960230422') && !message.member.roles.cache.has('712770368565411882') && !message.member.roles.cache.has('697152886064545832') && !message.member.roles.cache.has('712770372205805574') && !message.member.roles.cache.has('712770372877156432') && !message.member.roles.cache.has('712770373095129109') && !message.member.roles.cache.has('712770374097436743')) return message.channel.send(`**Bu komutu sadece yetkililer kullanabilir!**`)

const paktif = args.slice(0).join(' ')
if(!paktif) {
	
	return message.channel.send
	(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`**${message.author}**, bir saat belirtmedin.`)
	).then(msg => {
				msg.delete(10000)
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
	.addField(`Sunucu Aktif Edilecektir.\nPlanlı Aktif Saati : ${paktif} `, "V1.0"))
  }
}
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["paktif"],
  kategori : "admin"
};
 
exports.help = {
  name: 'planlıaktif',
  description: 'Tüm komutları gösterir.',
  usage: 'planlıaktif'
};