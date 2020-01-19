const Discord = require(`discord.js`)

exports.run = async (client, message, args) => { 
  let member = message.mentions.members.first()
    if(!member)
      return message.guild.channels.get(`659603136574521364`).send("❌ **|** Por favor, mencione **alguém** para abraçar! ``-abraçar @<usuário>``")
        
      number = 30;
      let random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch (random) {
        case 1: 
        let abraço1embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://i.pinimg.com/originals/90/66/84/906684cf8e854f314252c398c99b3439.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço1embed)
        break;
        case 2:
        let abraço2embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`http://78.media.tumblr.com/tumblr_li47zoVZx71qcl8mbo1_500.gif`);
         message.guild.channels.get(`659603136574521364`).send(abraço2embed)
        break;
        case 3:
        let abraço3embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://i.pinimg.com/originals/fe/d2/5f/fed25f0206d07d9ee18bdea761817fce.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço3embed)
        break;
        case 4:
        let abraço4embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://i.pinimg.com/originals/6e/6e/53/6e6e53fb69d7b74286c9d2817e1fc3ca.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço4embed)
        break;
        case 5:
        let abraço5embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://pa1.narvii.com/6471/68702f51590c932bf0dbebaef9804c31c664ebd9_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço5embed)
        break;
        case 6:
        let abraço6embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(`💥 **${member.user.username}** você recusou o abraço do(a) **${message.author.username}**`)
          .setImage(`https://media1.tenor.com/images/5b5974e20c4ab53e7bbbea0ea9cc996b/tenor.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço6embed)
        break;
        case 7:
        let abraço7embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://media2.giphy.com/media/XBhIHmeO7EDF6/source.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço7embed)
        break;
        case 8:
        let abraço8embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://i.pinimg.com/originals/22/f5/33/22f5333a63315dcb874f72e137fa0d92.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço8embed)
        break;
        case 9:
        let abraço9embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`http://25.media.tumblr.com/tumblr_maf0uwybuP1qzd219o1_500.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço9embed)
        break;
        case 10:
        let abraço10embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://67.media.tumblr.com/tumblr_mdi1l8AaDi1rcm8d4o1_500.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço10embed)
        break;
        case 11:
        let abraço11embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://thumbs.gfycat.com/GlaringIllegalKoodoo-size_restricted.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço11embed)
        break;
        case 12:
        let abraço12embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço12embed)
        break;
        case 13:
        let abraço13embed = new Discord.RichEmbed()
          .setColor("F7DC6F")
          .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
          .setImage(`https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço13embed)
        break;
        case 14:
        let abraço14embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://media1.tenor.com/images/f02c7e8d52dac534526dbb86ccc5289e/tenor.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço14embed)
        break;
        case 15:
        let abraço15embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://thumbs.gfycat.com/GratefulComplexGlassfrog-size_restricted.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço15embed)
        break;
        case 16:
        let abraço16embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://media2.giphy.com/media/nFL0SBciehEw8/giphy.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço16embed)
        break;
        case 17:
        let abraço17embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço17embed)
        break;
        case 18:
        let abraço18embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://media1.tenor.com/images/1059f68239cb86bd147c8cf745792433/tenor.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço18embed)
        break;
        case 19:
        let abraço19embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://thumbs.gfycat.com/EvilFlawlessDeer-size_restricted.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço19embed)
        break;
        case 20:
        let abraço20embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://media2.giphy.com/media/aD1fI3UUWC4/source.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço20embed)
        break;
        case 21:
        let abraço21embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://media.giphy.com/media/DyYraMDuPvuOQ/giphy.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço21embed)
        break;
        case 22:
        let abraço22embed = new Discord.RichEmbed()
            .setColor("BLACK")
            .setDescription(`😱 Esse é o seu abraço **${message.author.username}** no(a) **${member.user.username}**??`)
            .setImage(`https://i.pinimg.com/originals/f9/a0/57/f9a057a045da55a250e661480ef92846.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço22embed)
        break;
        case 23:
        let abraço23embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://i.pinimg.com/originals/88/5a/e2/885ae241c071f7c87e38fcb3d2d9b6e5.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço23embed)
        break;
        case 24:
        let abraço24embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://pa1.narvii.com/7325/f02556d0316b2972042fa3fc521389f3a6dabdb7r1-540-304_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço24embed)
        break;
        case 25:
        let abraço25embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`http://ekladata.com/XvOvSq9_BjHwkgeyCi81V1sX8zM.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço25embed)
        break;
        case 26:
        let abraço26embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`https://i.pinimg.com/originals/82/c8/e9/82c8e9ff24cce631fa061b35cf9fe82b.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço26embed)
        break;
        case 27:
        let abraço27embed = new Discord.RichEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(`http://1.bp.blogspot.com/-OpJBN3VvNVw/T7lmAw0HxFI/AAAAAAAAAfo/bGJks9CqbK8/s1600/HUG_K-On!+-+Kawaii.AMO.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço27embed)
        break;
        case 28:
        let abraço28embed = new Discord.RichEmbed()
              .setColor("F7DC6F")
              .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
              .setImage(`https://media1.tenor.com/images/a2b938d651a8f6b89ed4c02f9f8c13ed/tenor.gif`);
            message.guild.channels.get(`659603136574521364`).send(abraço28embed)
        break;
        case 29:
        let abraço29embed = new Discord.RichEmbed()
              .setColor("F7DC6F")
              .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
              .setImage(`https://pa1.narvii.com/6250/7ba65b87ecf250d54bd751693f69fe5aef701b34_hq.gif`);
            message.guild.channels.get(`659603136574521364`).send(abraço29embed)
        break;
        case 30:
        let abraço30embed = new Discord.RichEmbed()
              .setColor("F7DC6F")
              .setDescription(`💚 **${member.user.username}** você levou um abraço do(a) **${message.author.username}**`)
              .setImage(`https://i.kym-cdn.com/photos/images/original/001/253/164/a36.gif`);
        message.guild.channels.get(`659603136574521364`).send(abraço30embed)
        break;
      
      }
     
}

exports.help = {
    name:"abraçar"
}
