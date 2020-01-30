const Discord = require(`discord.js`)

exports.run = async (client, message, args) => { 
  let member = message.mentions.members.first()
    if(!member)
      return message.guild.channels.get(`659603136574521364`).send("❌ **|** Por favor, mencione **alguém** para matar! ``-matar @<usuário>``")
        
      number = 32;
      let random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch (random) {
        case 1: 
        let matar1embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://media.giphy.com/media/K8aESpKfDc9fa/giphy.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar1embed)
        break;
        case 2:
        let matar2embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://giffiles.alphacoders.com/183/183915.gif`);
         message.guild.channels.get(`659603136574521364`).send(matar2embed)
        break;
        case 3:
        let matar3embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://2.bp.blogspot.com/-D7xo7orCxpw/VXtFH4_1msI/AAAAAAAAANM/oaZJOkBTk10/s1600/mirai%2Bnikki.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar3embed)
        break;
        case 4:
        let matar4embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://i.pinimg.com/originals/5b/b1/f6/5bb1f65af5d7a1080408a946003e3d6b.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar4embed)
        break;
        case 5:
        let matar5embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://pa1.narvii.com/6347/540cd22e9672e1d2b239b241143ce38907474238_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar5embed)
        break;
        case 6:
        let matar6embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://giffiles.alphacoders.com/188/188926.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar6embed)
        break;
        case 7:
        let matar7embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://i.imgur.com/9UAuada.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar7embed)
        break;
        case 8:
        let matar8embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://i.makeagif.com/media/4-27-2015/ESYChi.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar8embed)
        break;
        case 9:
        let matar9embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://s.aficionados.com.br/imagens/6831702-orig.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar9embed)
        break;
        case 10:
        let matar10embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://pa1.narvii.com/6229/dfeee5bf8eb1c01c478efa7e2d6aa64f85cca5a9_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar10embed)
        break;
        case 11:
        let matar11embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://24.media.tumblr.com/tumblr_mcj4rki1ws1rwmo40o1_500.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar11embed)
        break;
        case 12:
        let matar12embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://i0.wp.com/nerdgeekfeelings.com/wp-content/uploads/2018/11/watamote-header.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar12embed)
        break;
        case 13:
        let matar13embed = new Discord.RichEmbed()
          .setColor("#80002a")
          .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
          .setImage(`https://giffiles.alphacoders.com/188/188621.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar13embed)
        break;
        case 14:
        let matar14embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://media0.giphy.com/media/67u3IwLmk68V2/source.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar14embed)
        break;
        case 15:
        let matar15embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://s.aficionados.com.br/imagens/1453411853-0dfd024f1bd6b04dbd97afea226e2d2f.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar15embed)
        break;
        case 16:
        let matar16embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://pa1.narvii.com/6221/c779811a050caaafedc22e5d428e4b6c55f67551_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar16embed)
        break;
        case 17:
        let matar17embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://i.pinimg.com/originals/be/22/73/be22730f9491dd6e6b37a714fa76256a.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar17embed)
        break;
        case 18:
        let matar18embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://s.aficionados.com.br/imagens/giphy-3-5.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar18embed)
        break;
        case 19:
        let matar19embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://66.media.tumblr.com/e612ad660a8ee7980f512ad219e2f439/tumblr_pw0ad1fbNH1tndn6wo5_500.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar19embed)
        break; 
        case 20:
        let matar20embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://pa1.narvii.com/6282/9328827e700fda1a5d618b2451844364e814ac9e_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar20embed)
        break;
        case 21:
        let matar21embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://4.bp.blogspot.com/-KpS8AHCm5y4/V-_6X5DzD1I/AAAAAAAAOsI/X4RCgycZ4bkRyQuiALVhEYjDZK2YQgy6ACLcB/s1600/91%2BDays%2B%25281%2529.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar21embed)
        break;
        case 22:
        let matar22embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://ptanime.com/wp-content/uploads/2016/02/Owari-no-Seraph-Shinoa-ataque.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar22embed)
        break;
        case 23:
        let matar23embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://data.whicdn.com/images/206210199/original.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar23embed)
        break;
        case 24:
        let matar24embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://thundercheats.com.br/wp-content/uploads/2019/01/Dororo-04-%E2%80%93-Impress%C3%B5es-Semanais.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar24embed)
        break;
        case 25:
        let matar25embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://3.bp.blogspot.com/-2Zz_YmRx7WQ/VOd_7EnihpI/AAAAAAAAILQ/05wpxiojIDM/s1600/saber-lancer-gif.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar25embed)
        break;
        case 26:
        let matar26embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://2.bp.blogspot.com/-lY0Ijpdwr44/WDO3iBCf5NI/AAAAAAAALi4/Pmp5gqalPG01P_aN-n9h2_ELgWeU_TVtQCLcB/s640/flip-flappers-gifs%2B%25285%2529.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar26embed)
        break;
        case 27:
        let matar27embed = new Discord.RichEmbed()
            .setColor("#80002a")
            .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
            .setImage(`https://s.aficionados.com.br/imagens/rasengan.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar27embed)
        break;
        case 28:
        let matar28embed = new Discord.RichEmbed()
              .setColor("#80002a")
              .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
              .setImage(`https://i.pinimg.com/originals/7e/3e/37/7e3e37819f16a90c2bda4082c69ba6a9.gif`);
            message.guild.channels.get(`659603136574521364`).send(matar28embed)
        break;
        case 29:
        let matar29embed = new Discord.RichEmbed()
              .setColor("#80002a")
              .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
              .setImage(`https://i.gifer.com/74z.gif`);
            message.guild.channels.get(`659603136574521364`).send(matar29embed)
        break;
        case 30:
        let matar30embed = new Discord.RichEmbed()
              .setColor("#80002a")
              .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
              .setImage(`https://pa1.narvii.com/6839/8b4ddfcdfc6d4faaf1b00633657987d911e7c14f_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar30embed)
        break;
        case 31:
        let matar31embed = new Discord.RichEmbed()
              .setColor("#80002a")
              .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
              .setImage(`https://pa1.narvii.com/6830/5bc947cb6b49b0bd919dbde68d9f30b77c0d3e5d_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar31embed)
        break;
        case 32:
        let matar32embed = new Discord.RichEmbed()
              .setColor("#80002a")
              .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
              .setImage(`https://pa1.narvii.com/6830/9d7934cb2421f6ad4f754eb5a8b9697f75850b09_hq.gif`);
        message.guild.channels.get(`659603136574521364`).send(matar32embed)
        break;
      
      }
     
}

exports.help = {
    name:"matar"
}