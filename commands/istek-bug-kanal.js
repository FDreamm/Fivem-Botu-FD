const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async(client, message, args) => {
message.delete({ timeout: 1 });
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yeterli yetkiye sahip değilsin");

if(!args[0])return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`\n\nKullanımı ${ayarlar.prefix}bug-kanal veya istek-kanal [ayarla/sıfırla]`))

if(args[0]!=="ayarla"&& args[0]!=="sıfırla")return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`\n\nKullanımı ${ayarlar.prefix}bug-kanal veya istek-kanal [ayarla/sıfırla]`))

if (args[0] === 'ayarla') {

if(!message.mentions.channels.first())return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`\n\nBir kanal etiketlemelisin`))

db.set(`bugkanal_${message.guild.id}`, message.mentions.channels.first().id)
message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':white_check_mark: Başarılı :white_check_mark:')
    .setDescription(`\n\nBug/İstek kanalı ayarlandı`))}

if (args[0] === 'sıfırla') {
db.delete(`bugkanal_${message.guild.id}`)
message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':white_check_mark: Başarılı :white_check_mark:')
    .setDescription(`\n\nBug/İstek kanalı sıfırlandı`))
}

}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['bug-kanal','istek-kanal'],
    permLevel : 0 ,
  kategori : 'bug'
}
exports.help = {
    name : 'bug-kanal',
    description : '',
    usage : 'bug-kanal ayarla #kanaletiket'
}