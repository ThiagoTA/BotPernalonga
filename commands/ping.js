const Discord = require("discord.js");

exports.run = (client,message,args) => {

        message.delete().catch()
  
        let embed = new Discord.RichEmbed()

        .setTitle("**Ping do Bot**")
        .setColor("#bd26f7")
        .setDescription(`O ping do bot é de ${Math.round(client.ping)}ms!`)
        

        message.channel.send(embed).then(r => r.delete(20000))
}

exports.help = {
    name: "ping"
}