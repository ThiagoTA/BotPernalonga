const Discord = require(`discord.js`)

module.exports.run = (client, message, args) => {
    
    if(!message.member.hasPermission("ADD_REACTIONS")) return message.reply("❌ **|** Você não tem **Permissão** suficiente !")
        message.delete().catch() 
    
    let splitarg = args.join(" ").split(" - ")
    let titulo = splitarg[0]
    let sugestão = splitarg[1]

    if(!titulo){
        message.channel.send("😫 **|** Para utilizar a sugestão basta ``-sugestão <titulo> (sugestão)``")
         return
    }

    if(!sugestão){
        message.channel.send("😫 **|** Para utilizar a sugestão basta ``-sugestão <titulo> (sugestão)``")
         return
    }
    
    let sugestãoembed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(`${message.author.username}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .addField(`__${titulo}__`, `**${sugestão}**`)
        .setFooter(`Sugestão feita por ${message.author.username}`)
        .setTimestamp();

    message.guild.channels.get(`659602483399753748`).send(sugestãoembed)


}