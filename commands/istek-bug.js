const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
	message.delete({ timeout: 1 });
if ( message.channel.id != '810895035402027029' ) return message.channel.send(`${message.author}**, !Bug/İstek komutunu bu kanalda kullanamazsın.**`).then(msg => {
	msg.delete({ timeout: 5000 });
			});

const kanal = await db.fetch(`bugkanal_${message.guild.id}`)
if(!kanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`\n\n **${message.author}**, Bug/İstek kanalı ayarlanmamış!`)).then(msg => {
		msg.delete({ timeout: 5000 });
			})
 let kanall = client.channels.cache.find(c => c.id === kanal)

const kullanım = args[0]
if(!kullanım) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`\n\n **${message.author}** komutu doğru kullanmalısın. **Kullanım:** \`${ayarlar.prefix}bug veya istek\`  **ÖRN:**  !bug veya !istek LSPD-EMS şöyle yapabilir.. veya Şu script gelebilir...`)).then(msg => {
		msg.delete({ timeout: 5000 });
			})

const bug = args.slice(0).join(' ')
if(!bug) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(':x: Hata :x:')
    .setDescription(`**${message.author}**, bir Bug/İstek belirtmedin.`)).then(msg => {
		msg.delete({ timeout: 5000 });
			})

//message.delete()
/*
setTimeout(async () => {
	message.delete()
}, 600000)
*/
	
message.author.send(
	
	new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`${message.author.username}, bug/istek başarıyla gönderildi.`)
	.setAuthor(message.guild.name, client.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	.setTimestamp(message.createdAt)
    .setDescription(`**Bug/İstek Metni:** ${bug}`))
	
   let embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('Yeni Bir Bug/İstek!')
    .setAuthor(message.guild.name, client.user.avatarURL)
    .setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .addField('Gönderen', `**${message.author}** - **${message.author.tag}**`)
      .addField('Bug/İstek', bug)
    .setFooter(`${message.author.username} tarafından gönderildi.`, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }), `${message.author.Date} kanalında kullanıldı.`)
    .setTimestamp()
    kanall.send(embed).then(i => {
	
	i.react("🔒")
	let emojiv1 = (reaction, user) => reaction.emoji.name === "🔒" && user.id !== client.user.id
	let emojiv2 = i.createReactionCollector(emojiv1, { time: 0 });  
	
	let fdid = '246870608032301057'
	
	emojiv2.on('collect', async reaction => {
		const author = reaction.users.cache.last()
		if (author.id == fdid) {
			//const author = reaction.users.last()
			//reaction.remove(author.id)
			
			kanall.send
			(
			new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle('10 saniye sonra otomatik silinecek!')
			).then(msg => {
				msg.delete({ timeout: 5000 });
			})
			
			setTimeout(async () => {
				i.delete()
			}, 10000)
			
		} else {
			
			kanall.send
			(
			new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle(`Maalesef ki bu işlemi yapamıyorsun!`)
			).then(msg => {
				msg.delete({ timeout: 5000 });
			})
			
			msg.delete({ timeout: 5000 }); //(author.id)			
		}	
	})
	
	})
}




exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['bug','istek'],
	permLevel : 0 ,
  kategori : 'bug/istek'
}
exports.help = {
	name : 'Bug/istek',
	description : 'Bug/istek Sistemi',
	usage : 'Bug/istek'
}