const Discord = require("discord.js");

exports.run = (client,message,args) => {
    
  if(message.content.startsWith("-horáriopt")){
    msgDel = 1;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  }  

    embed = {
        "title": "⏰ **Horário das Lives** ⏰",
        "description": `Olá ${message.author}, aqui estão os horários, são atualizados toda semana. \n Se você é Brasileiro, utilize -horário.`,
        "color": 9442302,
        "thumbnail": {
          "url": "https://media1.tenor.com/images/7b02799e8956ad375c39ba2710795003/tenor.gif?itemid=10654881"
        },
        "fields": [
          {
            "name": "\n✅ **Domingo**",
            "value": "**16Hrs até 22Hrs**",
            "inline": true
          },
          {
            "name": "❌ **Segunda**",
            "value": "**~~Sem Live~~**",
            "inline": true
          },
          {
            "name": "✅ **Terça**",
            "value": "**21Hrs até 01Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Quarta**",
            "value": "**21Hrs até 01Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Quinta**",
            "value": "**21Hrs até 01Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Sexta**",
            "value": "**21Hrs até 01Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Sábado**",
            "value": "**19Hrs até 01Hrs**",
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
    name: "horáriopt"
}

