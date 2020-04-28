const Discord = require(`discord.js`)

exports.run = async (client, message, args) => { 
    message.delete().catch
    let member = message.mentions.members.first()
    
    let membroembed = new Discord.RichEmbed()
                        
      .setDescription(`:warning: ${message.author} mencione alguém para dar parabéns !`)
      .setColor('#ff0000')

    if(!member) {
      message.channel.send(membroembed).then(r => r.delete(10000)) 
      message.delete().catch()}

let niverlorran = new Discord.RichEmbed()
        .setColor('#ffcc99')
        .setDescription(`💞 ${message.author} dando **FELIZ ANIVERSÁRIO** para ${member.user} 💞`)
        .setImage(`https://78.media.tumblr.com/26f4a94cfa0988cdd4da8f97b6495b4b/tumblr_oudxtlZAuY1uxikalo2_500.gif`)
message.channel.send(niverlorran)
}
exports.help = {
    name:"parabéns"
}