const Discord = require("discord.js");

exports.run = (client,message,args) => {
    
  if(message.content.startsWith("-horário")){
    msgDel = 1;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  }  

    embed = {
        "title": "⏰ **Horário das Lives** ⏰",
        "description": `Olá ${message.author}, aqui estão os horários, são atualizados toda semana. \n Se você é de portugal, utilize -horáriopt.`,
        "color": 9442302,
        "thumbnail": {
          "url": "https://media1.tenor.com/images/7b02799e8956ad375c39ba2710795003/tenor.gif?itemid=10654881"
        },
        "fields": [
          {
            "name": "\n✅ **Domingo**",
            "value": "**13Hrs até 19Hrs**",
            "inline": true
          },
          {
            "name": "❌ **Segunda**",
            "value": "**~~Sem Live~~**",
            "inline": true
          },
          {
            "name": "✅ **Terça**",
            "value": "**18Hrs até 22Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Quarta**",
            "value": "**18Hrs até 22Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Quinta**",
            "value": "**18Hrs até 22Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Sexta**",
            "value": "**18Hrs até 22Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Sábado**",
            "value": "**16Hrs até 22Hrs**",
            "inline": true
          },
          {
            "name": "💜 **Twitch**",
            "value": "**Lorran_aa**",
            "inline": true
          },
          {
            "name": "📸 **Instagram**",
            "value": "**lorran.exe**",
            "inline": true
          }
        ]
      };
      message.channel.send({ embed });
      
}

exports.help = {
    name: "horário"
}