
const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor("#FF0000").setDescription("Bu Komutu Sadece Yetkililer Kullanabilir!"));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("#FF0000").setDescription("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫"));
message.channel.bulkDelete(args[0]).then(() => {
  const silembed = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .addField("Mesajlar Başarı İle Silindi.\nSilinen Mesaj Sayısı : ", `${args[0]}`)
  .addField("Silen Kişi : ", `${message.member}`)
  .setFooter(`Bu mesaj 5 saniye sonra silinecektir.`)
  .setTimestamp()
  message.channel.send(silembed).then(msg => msg.delete({ timeout: 1500 }))
})

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2 ,
  kategori : "admin"
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <0-100>'
};