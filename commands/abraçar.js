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
        
            let retornoabr = new Discord.RichEmbed()
              .setColor("BLACK")
              .setDescription("😭 Quer um abraço por ser solitário?")
              .setImage(`https://thumbs.gfycat.com/ScaryLargeHuia-size_restricted.gif`)
            message.channel.send(retornoabr)
      
        }else {
      
      number = 31;
      let random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch (random) {
        case 1: gif = 'https://i.pinimg.com/originals/90/66/84/906684cf8e854f314252c398c99b3439.gif'
        break;
        case 2: gif = 'http://78.media.tumblr.com/tumblr_li47zoVZx71qcl8mbo1_500.gif'
        break;
        case 3: gif = 'https://i.pinimg.com/originals/fe/d2/5f/fed25f0206d07d9ee18bdea761817fce.gif'
        break;
        case 4: gif = 'https://i.pinimg.com/originals/6e/6e/53/6e6e53fb69d7b74286c9d2817e1fc3ca.gif'
        break;
        case 5: gif = 'https://pa1.narvii.com/6471/68702f51590c932bf0dbebaef9804c31c664ebd9_hq.gif'
        break;
        case 6: 
          let abrembed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💥 **${member.user.username}** você recusou o abraço do(a) **${message.author.username}**`)
            .setImage(`https://media1.tenor.com/images/5b5974e20c4ab53e7bbbea0ea9cc996b/tenor.gif`)
          message.channel.send(abrembed)
        break;
        case 7: gif = 'https://media2.giphy.com/media/XBhIHmeO7EDF6/source.gif'
        break;
        case 8: gif = 'https://i.pinimg.com/originals/22/f5/33/22f5333a63315dcb874f72e137fa0d92.gif'
        break;
        case 9: gif = 'http://25.media.tumblr.com/tumblr_maf0uwybuP1qzd219o1_500.gif'
        break;
        case 10: gif = 'https://67.media.tumblr.com/tumblr_mdi1l8AaDi1rcm8d4o1_500.gif'
        break;
        case 11: gif = 'https://thumbs.gfycat.com/GlaringIllegalKoodoo-size_restricted.gif'
        break;
        case 12: gif = 'https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif'
        break;
        case 13: gif = 'https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gif'
        break;
        case 14: gif = 'https://media1.tenor.com/images/f02c7e8d52dac534526dbb86ccc5289e/tenor.gif' 
        break;
        case 15: gif = 'https://thumbs.gfycat.com/GratefulComplexGlassfrog-size_restricted.gif'
        break;
        case 16: gif = 'https://media2.giphy.com/media/nFL0SBciehEw8/giphy.gif'
        break;
        case 17: gif = 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif'
        break;
        case 18: gif = 'https://media1.tenor.com/images/1059f68239cb86bd147c8cf745792433/tenor.gif'
        break;
        case 19: gif = 'https://thumbs.gfycat.com/EvilFlawlessDeer-size_restricted.gif'
        break;
        case 20: gif = 'https://media2.giphy.com/media/aD1fI3UUWC4/source.gif'
        break;
        case 21: gif = 'https://media.giphy.com/media/DyYraMDuPvuOQ/giphy.gif'
        break;
        case 22:
          let abraço22embed = new Discord.RichEmbed()
            .setColor("BLACK")
            .setDescription(`😱 Esse é o seu abraço **${message.author.username}** no(a) **${member.user.username}**??`)
            .setImage(`https://i.pinimg.com/originals/f9/a0/57/f9a057a045da55a250e661480ef92846.gif`);
          message.channel.send(abraço22embed)
        break;
        case 23: gif = 'https://i.pinimg.com/originals/88/5a/e2/885ae241c071f7c87e38fcb3d2d9b6e5.gif'
        break;
        case 24: gif = 'https://pa1.narvii.com/7325/f02556d0316b2972042fa3fc521389f3a6dabdb7r1-540-304_hq.gif'
        break;
        case 25: gif = 'http://ekladata.com/XvOvSq9_BjHwkgeyCi81V1sX8zM.gif'
        break;
        case 26: gif = 'https://i.pinimg.com/originals/82/c8/e9/82c8e9ff24cce631fa061b35cf9fe82b.gif'
        break;
        case 27: gif = 'http://1.bp.blogspot.com/-OpJBN3VvNVw/T7lmAw0HxFI/AAAAAAAAAfo/bGJks9CqbK8/s1600/HUG_K-On!+-+Kawaii.AMO.gif'
        break;
        case 28: gif = 'https://media1.tenor.com/images/a2b938d651a8f6b89ed4c02f9f8c13ed/tenor.gif'
        break;
        case 29: gif = 'https://pa1.narvii.com/6250/7ba65b87ecf250d54bd751693f69fe5aef701b34_hq.gif'
        break;
        case 30: gif = 'https://i.kym-cdn.com/photos/images/original/001/253/164/a36.gif'
        break;
        case 31: gif = 'https://66.media.tumblr.com/a881c72015b718fd80ba5126e3ff9712/tumblr_pr91iwLpJd1uelgxao2_540.gif'
        break;
        
      }
      
      let abrembed = new Discord.RichEmbed()
        .setColor("F7DC6F")
        .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
        .setImage(`${gif}`)
      message.channel.send(abrembed)
    }

  }
          
}

exports.help = {
    name:"abraçar"
}




