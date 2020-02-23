const Discord = require("discord.js");

exports.run = (client,message,args) => {
        
    if(message.content.startsWith("-ping")){
        msgDel = 1;
        let numberMessages = parseInt(msgDel);
        message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
      }  
    
        let embed = new Discord.RichEmbed()

        .setTitle("**Ping do Bot**")
        .setColor("#bd26f7")
        .setDescription(`O ping do bot é de ${Math.round(client.ping)}ms!`)
        

        message.channel.send(embed);
}

exports.help = {
    name: "ping"
}