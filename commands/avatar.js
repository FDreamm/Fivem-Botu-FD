const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete({ timeout: 1 });
    let üye = message.mentions.members.first();
  if(!üye) {
    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription('**İşte Avatarın!**')
      .setImage(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setTimestamp() 
    message.channel.send(embed)
  }
  if(üye) {
    message.delete({ timeout: 1 });
    let embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .addField('**İşte Etiketlediğin Kişinin Avatarı!**', `**Etiketlediğin Kişi : **<@${üye.user.id}>`, true)
      .setImage(üye.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setTimestamp()
    message.channel.send(embed)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pp"],
  permLevel: 0 ,
  kategori: "genel"
}

exports.help = {
  name: 'avatar'
};

