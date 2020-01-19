const Discord = require("discord.js");

exports.run = (client,message,args) => {
     
  if(message.content.startsWith("-sobre")){
    msgDel = 1;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  }  
    
    embed = {
        "title": "📃 **Sobre** 📃",
        "description": `**Olá** ${message.author}, sou o pernalonga, sou um mascote na live do **Lorran_AA**, sou um Bot exclusivo desse **Servidor**. \n\nFui desenvolvido pelo !Thiago#9137, que atualmente, está cursando a faculdade de **TI**.\n\nAqui em baixo está algumas informações do meu **Criador** e **Dono**:`,
        "color": 4886754,
        "thumbnail": {
          "url": "https://media3.giphy.com/media/3oFzlZzyoQZdNekCas/giphy.gif"
        },
        "fields": [
          {
            "name": "\n⚡ **Dono:**",
            "value": "Twitch: https://www.twitch.tv/lorran_aa/\n Twitter: https://twitter.com/lorran770\n Instagram: https://www.instagram.com/lorran.exe/ "
          },
          {
            "name": "\n💟 **Criador:**",
            "value": "Instagram: https://www.instagram.com/ta.thiago/?hl=en\n SoundCloud: https://soundcloud.com/kazenkz\n OSU: https://osu.ppy.sh/users/13464571\n MAL: https://myanimelist.net/profile/Takashii-Kun "
          },
          {
            "name": "\n🔧 **Equipe:**",
            "value": "Romulo: https://www.instagram.com/romulosil.va"
          }
        ]
      }; 
      message.channel.send({ embed });
}


exports.help = {
    name:"sobre"
}