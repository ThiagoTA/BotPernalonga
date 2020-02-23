const Discord = require("discord.js");

exports.run = (client,message,args) => {
     
  if(message.content.startsWith("-ajuda")){
    msgDel = 1;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  }

  embed = {
    "title": "📖 COMANDOS HELP 📖",
    "description": "```➤ Olá velhinho, como vai? Aqui estão todos os comandos possíveis dentro do servidor.```",
    "color": 9442302,
    "footer": {
      "icon_url": `${message.author.displayAvatarURL}`,
      "text": `${message.author.username}`
    },
    "thumbnail": {
      "url": "https://media3.giphy.com/media/3oFzmerJ9kykSR92jm/giphy.gif"
    },
    "fields": [
      {
        "name": "│:signal_strength: Servidor:",
        "value": "```→ -ping\n→ -sugestão\n→ -reportar\n→ -bug❌```",
        "inline": true
      },
      {
        "name": "│:wrench: Moderação:",
        "value": "```→ -limpar\n→ -kick\n→ -ban\n→ -anunciar```",
        "inline": true
      },
      {
        "name": "│:star: Diversão:",
        "value": "```→ -beijar\n→ -abraçar\n→ -matar\n→ -comer```",
        "inline": true
      },
      {
        "name": "│🎬 Stream:",
        "value": "```→ -horário\n→ -horáriopt\n→ -livegame\n→ -parceiros❌```",
        "inline": true
      },
      {
        "name": "│:speech_balloon: Sobre:",
        "value": "```➤ Esse bot está sendo desenvolvido pelo #!Thiago#9137\n→ -sobre```",
        "inline": false
      }
    ]
  };
      message.channel.send({ embed });
}


exports.help = {
    name:"ajuda"
}