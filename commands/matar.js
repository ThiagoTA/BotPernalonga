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
          .setDescription("😱 Não pode suicídio aqui **;-;**")
          .setImage(`https://i.pinimg.com/originals/6b/ce/12/6bce1281f126ff381d412421a6457473.gif`)
        message.channel.send(retornokiss)
      
        }else {
      
      number = 32;
      let random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch (random) {
        case 1: gif = 'https://media.giphy.com/media/K8aESpKfDc9fa/giphy.gif'
        break;
        case 2: gif = 'https://giffiles.alphacoders.com/183/183915.gif'
        break;
        case 3: gif = 'https://2.bp.blogspot.com/-D7xo7orCxpw/VXtFH4_1msI/AAAAAAAAANM/oaZJOkBTk10/s1600/mirai%2Bnikki.gif'
        break;
        case 4: gif = 'https://i.pinimg.com/originals/5b/b1/f6/5bb1f65af5d7a1080408a946003e3d6b.gif'
        break;
        case 5: gif = 'https://pa1.narvii.com/6347/540cd22e9672e1d2b239b241143ce38907474238_hq.gif'
        break;
        case 6: gif = 'https://giffiles.alphacoders.com/188/188926.gif'
        break;
        case 7: gif = 'https://i.imgur.com/9UAuada.gif'
        break;
        case 8: gif = 'https://i.makeagif.com/media/4-27-2015/ESYChi.gif'
        break;
        case 9: gif = 'https://s.aficionados.com.br/imagens/6831702-orig.gif'
        break;
        case 10: gif = 'https://pa1.narvii.com/6229/dfeee5bf8eb1c01c478efa7e2d6aa64f85cca5a9_hq.gif'
        break;
        case 11: gif = 'https://24.media.tumblr.com/tumblr_mcj4rki1ws1rwmo40o1_500.gif'
        break;
        case 12: gif = 'https://i0.wp.com/nerdgeekfeelings.com/wp-content/uploads/2018/11/watamote-header.gif'
        break;
        case 13: gif = 'https://giffiles.alphacoders.com/188/188621.gif'
        break;
        case 14: gif = 'https://media0.giphy.com/media/67u3IwLmk68V2/source.gif' 
        break;
        case 15: gif = 'https://s.aficionados.com.br/imagens/1453411853-0dfd024f1bd6b04dbd97afea226e2d2f.gif'
        break;
        case 16: gif = 'https://pa1.narvii.com/6221/c779811a050caaafedc22e5d428e4b6c55f67551_hq.gif'
        break;
        case 17: gif = 'https://i.pinimg.com/originals/be/22/73/be22730f9491dd6e6b37a714fa76256a.gif'
        break;
        case 18: gif = 'https://s.aficionados.com.br/imagens/giphy-3-5.gif'
        break;
        case 19: gif = 'https://66.media.tumblr.com/e612ad660a8ee7980f512ad219e2f439/tumblr_pw0ad1fbNH1tndn6wo5_500.gif'
        break;
        case 20: gif = 'https://pa1.narvii.com/6282/9328827e700fda1a5d618b2451844364e814ac9e_hq.gif'
        break;
        case 21: gif = 'https://4.bp.blogspot.com/-KpS8AHCm5y4/V-_6X5DzD1I/AAAAAAAAOsI/X4RCgycZ4bkRyQuiALVhEYjDZK2YQgy6ACLcB/s1600/91%2BDays%2B%25281%2529.gif'
        break;
        case 22: gif = 'https://ptanime.com/wp-content/uploads/2016/02/Owari-no-Seraph-Shinoa-ataque.gif'
        break;
        case 23: gif = 'https://data.whicdn.com/images/206210199/original.gif'
        break;
        case 24: gif = 'https://thundercheats.com.br/wp-content/uploads/2019/01/Dororo-04-%E2%80%93-Impress%C3%B5es-Semanais.gif'
        break;
        case 25: gif = 'https://3.bp.blogspot.com/-2Zz_YmRx7WQ/VOd_7EnihpI/AAAAAAAAILQ/05wpxiojIDM/s1600/saber-lancer-gif.gif'
        break;
        case 26: gif = 'https://2.bp.blogspot.com/-lY0Ijpdwr44/WDO3iBCf5NI/AAAAAAAALi4/Pmp5gqalPG01P_aN-n9h2_ELgWeU_TVtQCLcB/s640/flip-flappers-gifs%2B%25285%2529.gif'
        break;
        case 27: gif = 'https://s.aficionados.com.br/imagens/rasengan.gif'
        break;
        case 28: gif = 'https://i.pinimg.com/originals/7e/3e/37/7e3e37819f16a90c2bda4082c69ba6a9.gif'
        break;
        case 29: gif = 'https://i.gifer.com/74z.gif'
        break;
        case 30: gif = 'https://pa1.narvii.com/6839/8b4ddfcdfc6d4faaf1b00633657987d911e7c14f_hq.gif'
        break;
        case 31: gif = 'https://pa1.narvii.com/6830/5bc947cb6b49b0bd919dbde68d9f30b77c0d3e5d_hq.gif'
        break;
        case 32: gif = 'https://pa1.narvii.com/6830/9d7934cb2421f6ad4f754eb5a8b9697f75850b09_hq.gif'
        break;

      }
      let beiembed = new Discord.RichEmbed()
      .setColor('#80002a')
      .setDescription(`🔪 **${member.user.username}** você está sendo morto(a) por **${message.author.username}**`)
      .setImage(`${gif}`)
    message.channel.send(beiembed)
    }

  }
          
}

exports.help = {
    name:"matar"
}