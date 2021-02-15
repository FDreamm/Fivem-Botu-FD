const Discord = require('discord.js');


exports.run = async(client, message, args) => {
	message.delete({ timeout: 1 });
if( !message.member.roles.cache.has('802357134960230422') ) return message.channel.send(`**Bu komutu sadece kayıt bekleyenler kullanabilir!**`).then(msg => {
				msg.delete({ timeout: 5000 });
			})

return message.channel.send(`${message.author}, Kayıt ekibi sizinle ilgilenecektir. <@&802357684027260968>`,
	   new Discord.MessageEmbed()
	   .setTitle("**Arkadaşlarını Davet Et**")
	   .setAuthor("FDream")
	   .setColor('#FF0000')
	  .setFooter(`${message.author.username} tarafından gönderildi!`, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	  .setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	  .setImage("https://cdn.discordapp.com/attachments/808333220005412906/810895500257263646/ezgif.com-gif-maker.png")
	  .setTimestamp()
	  .setURL("https://discord.gg/")
	  .addField(`Merhaba, ${message.author.username}! Kayıt bekleme talebini aldık, hemen ilgileniyoruz. Sunucumuza hoş geldin.`,"V1.0"))
	  
}
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayit"],
  kategori : "kayıt"
};
 
exports.help = {
  name: 'kayıt',
  description: 'Tüm komutları gösterir.',
  usage: 'kayıt'
};