const Discord = require(`discord.js`)

exports.run = async (client, message, args) => { 
  
if(message.channel.id !== '659603136574521364'){
  
  message.channel.send('❌ **|** Não foi possível mandar esse comando dentro desse canal')

} else {
      
    let member = message.mentions.members.first()
    
    if(!member)
        return message.channel.send("❌ **|** Por favor, mencione **alguém** para beijar! ``-beijar @<usuário>``")
        
          if(message.author.id === member.id){
        
              let retornokiss = new Discord.RichEmbed()
                .setColor("BLACK")
                .setDescription("😭 Fica assim não, um dia você acha")
                .setImage(`https://miro.medium.com/max/1000/1*ptosHRnMX4ZbpwylA_GDYQ.gif`)
        
          message.channel.send(retornokiss)
      
        }else {
      
      number = 32;
      let random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch (random) {
        case 1: gif = 'https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif'
        break;
        case 2: gif = 'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif'
        break;
        case 3: gif = 'https://media0.giphy.com/media/QweWddrIQxlfi/giphy.gif?cid=790b761180723ce8ba838d4567177d521c3cd307a0875e7d&rid=giphy.gif'
        break;
        case 4: gif = 'https://media0.giphy.com/media/2FfCQFV28HMn6/giphy.gif?cid=790b76114001d26523a14da7623a3453f7d3eb20b02fbdfe&rid=giphy.gif'
        break;
        case 5: gif = 'https://media2.giphy.com/media/Ka2NAhphLdqXC/giphy.gif?cid=790b76118e1a46d309103c66ffe1aef078c1dc9ce319b676&rid=giphy.gif'
        break;
        case 6: gif = 'https://data.whicdn.com/images/216159838/original.gif'
        break;
        case 7: gif = 'https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif'
        break;
        case 8: gif = 'https://media2.giphy.com/media/Y9iiZdUaNRF2U/source.gif'
        break;
        case 9: gif = 'https://media.giphy.com/media/Q1TXCgzvfLNbW/giphy.gif'
        break;
        case 10: gif = 'https://i.pinimg.com/originals/07/28/db/0728db11c7616a329bcc2fabe324491d.gif'
        break;
        case 11: gif = 'https://data.whicdn.com/images/139250249/original.gif'
        break;
        case 12: gif = 'https://cdn.myanimelist.net/s/common/uploaded_files/1483588837-8380565ad290759921ae355a0bc242f5.gif'
        break;
        case 13: gif = 'https://media1.tenor.com/images/0e730944f918d06f633762e0b18fea4c/tenor.gif'
        break;
        case 14: gif = 'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif' 
        break;
        case 15: gif = 'https://media1.tenor.com/images/68a37a5a1b86f227b8e1169f33a6a6bb/tenor.gif'
        break;
        case 16: gif = 'https://giffiles.alphacoders.com/188/188468.gif'
        break;
        case 17: gif = 'https://giffiles.alphacoders.com/188/188473.gif'
        break;
        case 18: gif = 'https://media1.tenor.com/images/f3aa15cc96874fc7bdfb496a79756517/tenor.gif'
        break;
        case 19: gif = 'https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif'
        break;
        case 20: gif = 'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif'
        break;
        case 21: gif = 'https://media3.giphy.com/media/12VXIxKaIEarL2/source.gif'
        break;
        case 22: gif = 'https://i.pinimg.com/originals/9d/26/86/9d26867a4ce1a8ba746bf80fbf21d6a3.gif'
        break;
        case 23: gif = 'https://data.whicdn.com/images/246343962/original.gif'
        break;
        case 24: gif = 'https://media3.giphy.com/media/sZxXnlPo86hWw/source.gif'
        break;
        case 25: gif = 'https://cdn.myanimelist.net/s/common/uploaded_files/1483589715-78566ff0e75a4c8f004df98d994561e4.gif'
        break;
        case 26: gif = 'https://media1.tenor.com/images/1221d249716c94e153f50fff433821ae/tenor.gif'
        break;
        case 27: gif = 'https://data.whicdn.com/images/65110237/original.gif'
        break;
        case 28: gif = 'https://2.bp.blogspot.com/-D9IPMvPbI_s/V4pp1KdeCbI/AAAAAAAAMlM/aX8mRtIVxQoO3NQwv8UMhcYRLaxEqf9igCLcB/s640/gif_03.gif'
        break;
        case 29: gif = 'https://garotanerdgeek.files.wordpress.com/2017/01/61718-tumblr_mp4id1pvf11rveihgo1_500.gif'
        break;
        case 30: gif = 'https://thumbs.gfycat.com/LongPlasticAcornbarnacle-size_restricted.gif'
        break;
        case 31: gif = 'https://i.pinimg.com/originals/ce/78/9b/ce789b4147903a4d3fbec9f2c2103df1.gif'
        break;
        case 32: gif = 'https://i.pinimg.com/originals/ce/78/9b/ce789b4147903a4d3fbec9f2c2103df1.gif'
        break;
      
      }
    }
    let beiembed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`💞 **${member.user.username}** você levou um beijo do(a) **${message.author.username}**`)
    .setImage(`${gif}`)
  message.channel.send(beiembed)
  }
          
}

exports.help = {
    name:"beijar"
}