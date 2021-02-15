const Discord = require('discord.js');

exports.run = async(client, message, args) => {
message.delete({ timeout: 1 });

return message.channel.send(`@everyone`,
	  new Discord.MessageEmbed()
	  .setTitle("**Arkadaşlarını Davet Et**")
	  .setAuthor("FDream")
	  .setColor('#FF0000')
	  .setFooter(`${message.author.username} tarafından gönderildi!`, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	  .setImage("https://cdn.discordapp.com/attachments/808333220005412906/810895500257263646/ezgif.com-gif-maker.png")
	  .setTimestamp()
	  .setURL("https://discord.gg/")
	  .addField("İyi roller dileriz.","**F8 connect: 313131** **|** **Teamspeak 3 Adresi: **"))
	}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ip","teamspeak","ts3"],
  kategori : "admin"
};
 
exports.help = {
  name: 'ip',
  description: 'Tüm komutları gösterir.',
  usage: 'ip'
};

