const Discord = require(`discord.js`)

module.exports.run = (client, message, args) => {
    client.on('message', async message =>{
        if(message.channel.id == '659602483399753748'){ 
            message.react('👍');
            message.react('👎');
    }   
})

    if(!message.member.hasPermission("ADD_REACTIONS")) return message.reply("❌ **|** Você não tem **Permissão** suficiente !")
        message.delete().catch() 
    
    let splitarg = args.join(" ").split(" - ")
    let sugestão = splitarg[0]

    if(!sugestão){
        message.channel.send("😫 **|** Para utilizar a sugestão basta ``-sugestão (sugestão)``")
         return
    }
    
    message.channel.send(`✅ **|** Sua sugestão foi enviado com **sucesso**.`) 
    let sugestãoembed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(`${message.author.username}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`**${sugestão}**`)
        .setFooter(`Sugestão feita por ${message.author.username}`)
        .setTimestamp();
        
        
    message.guild.channels.get(`659602483399753748`).send(sugestãoembed)

    

}
exports.help = {
    name:"sugestão"
}

