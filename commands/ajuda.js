const Discord = require("discord.js");

exports.run = (client,message,args) => {
     
  if(message.content.startsWith("-ajuda")){
    msgDel = 1;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  }

    embed = {
        "title": "📃 **Comandos** 📃",
        "description": `Olá ${message.author}, todos os comandos possiveis estão aqui.`,
        "color": 4886754,
        "thumbnail": {
          "url": "http://3.bp.blogspot.com/-Eohhdl-gUJ0/VPHQuiXynDI/AAAAAAAAMb0/2lcXs5AFFDs/s1600/Bugs%2BBunny%2B12%2Bcora%C3%A7%C3%A3o%2Bsaltando.gif"
        },
        "author": {
          "name": "Capinha",
          "url": "https://www.twitch.tv/lorran_aa",
          "icon_url": "https://www.walldesk.com.br/fotos/11879_natal-do-pernalonga-e-do-taz-no-gelo.jpg"
        },
        "fields": [
          {
            "name": "\n💬 **Sobre:**",
            "value": "__-sobre__"
          },
          {
            "name": "\n📶 **Servidor:**",
            "value": "__-ping__, \n__-sugestão ``<titulo> (sugestão)__, \n__-reportar @<usuário> (motivo)__``"
          },
          {
            "name": "\n⏰ **Horário das Lives:**",
            "value": "🇧🇷 __-horário__, \n🇵🇹 __-horáriopt__"
          },
          {
            "name": "\n🔧 **Moderação:**",
            "value": "__-limpar__, \n__-kick__, \n__-ban__, \n__-anunciar__ "
          },
          {
            "name": "\n⭐ **Diversão:**",
            "value": "__-beijar `<usuário>`__, \n__-comer `<usuário>`__, \n__-abraçar `<usuário>`__"
          },
        ]
      }; 
      message.channel.send({ embed });
}


exports.help = {
    name:"ajuda"
}