const Discord = require(`discord.js`)

exports.run = async (client, message, args) => { 
  
if(message.channel.id !== '659603136574521364'){
  
  let erroembed = new Discord.RichEmbed()
                
    .setDescription(':warning:  Não foi possível enviar este comando nesse canal !')
    .setColor('#ff0000')

  message.channel.send(erroembed)

} else {
      
    let member = message.mentions.members.first()
    
    let membroembed = new Discord.RichEmbed()
                        
      .setDescription(':warning:  Você não mencionou ningúem !')
      .setColor('#ff0000')

    if(!member) return message.channel.send(membroembed)
        
          if(message.author.id === member.id){
        
            let retornokiss = new Discord.RichEmbed()
              .setColor("BLACK")
              .setDescription("😱 Tem como se comer? **( ͡° ͜ʖ ͡°)**")
              .setImage(`https://media.tenor.com/images/68048762da94c1158f05f3326f6c9297/tenor.gif`)
            message.channel.send(retornokiss)
      
        }else {
      
      number = 16;
      let random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch (random) {
        case 1: gif = 'https://s-media-cache-ak0.pinimg.com/originals/fa/bb/c2/fabbc2667d756977aa8731a9acfea889.gif'
        break;
        case 2: gif = 'https://i2.wp.com/66.media.tumblr.com/bd9ac6bf8b18fef7cf53499f7d46ccf0/tumblr_nvo38bV2CS1qd16pfo1_500.gif'
        break;
        case 3: gif = 'https://c1.quickcachr.fotos.sapo.pt/i/o4f0101d1/20159881_SCKjT.gif'
        break;
        case 4: gif = 'https://media.giphy.com/media/zd76Z18lDrjy0/giphy.gif'
        break;
        case 5: gif = 'https://media.giphy.com/media/LU3uRsnett7gs/giphy.gif'
        break;
        case 6: gif = 'https://uploads.spiritfanfiction.com/fanfics/capitulos/201408/fanfiction-diabolik-lovers-the-seven-swords-2297241,030820141922.gif'
        break;
        case 7: gif = 'https://media1.tenor.com/images/f56880b2fb5af27719af8c575dc96a61/tenor.gif'
        break;
        case 8: gif = 'https://data.whicdn.com/images/297349107/original.gif'
        break;
        case 9: gif = 'https://media1.tenor.com/images/3d599469dc38e928d4bcfd12ff748b14/tenor.gif'
        break;
        case 10: gif = 'https://media.giphy.com/media/U6kGxfqszGeUBFnOT8/giphy.gif'
        break;
        case 11: gif = 'https://i.pinimg.com/originals/6d/a4/34/6da434a8e9ad051e05b197ac59fa4b9d.gif`'
        break;
        case 12: gif = 'http://gif-free.com/uploads/posts/2018-01/1517419327_anime-girl-eating-burger.gif'
        break;
        case 13: gif = 'https://media.giphy.com/media/9vmCDhkEs4LWo/giphy.gif'
        break;
        case 14: gif = 'https://media0.giphy.com/media/x7Giq3osLWg6I/source.gif' 
        break;
        case 15: gif = 'https://i.gifer.com/Q3p.gif'
        break;
        case 16: gif = 'https://pa1.narvii.com/6498/847503bf2eb86cfb8b2360828a21e8b6efac364a_hq.gif'
        break;
      }
      
      let comerembed = new Discord.RichEmbed()
        .setColor("#80ff00")
        .setDescription(`😈 **${member.user.username}** você está sendo comida(o) pela(o) **${message.author.username}**`)
        .setImage(`${gif}`)
      message.channel.send(comerembed)
    }

  }
          
}

exports.help = {
    name:"comer"
}




