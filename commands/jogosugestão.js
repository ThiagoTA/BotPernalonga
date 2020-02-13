const Discord = require(`discord.js`)

module.exports.run = (client, message, args) => {
    client.on('message', async message =>{
        if(message.channel.id == '677524768148291604'){ 
            message.react('👎');
            message.react('👍');
    }   
})
    
    if(!message.member.hasPermission("ADD_REACTIONS")) return message.reply("❌ **|** Você não tem **Permissão** suficiente !")
    message.delete().catch() 
       
        let splitarg = args.join(" ").split(" - ")
        let jogosugestão = splitarg[0]

            if(!jogosugestão){
                return  message.channel.send("😫 **|** Para utilizar o jogo sugestão basta ``-jogosugestão (jogo)``")
            }
    
       message.channel.send(`✅ **|** Sua sugestão de jogo foi enviado com **sucesso**.`)
        
        let sugestãoembed = new Discord.RichEmbed()
            .setColor("ORANGE")
            .setTitle(`${message.author.username}`)
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`**${jogosugestão}**`)
            .setFooter(`Sugestão feita por ${message.author.username}`)
            .setTimestamp();
        
        
        message.guild.channels.get(`677524768148291604`).send(sugestãoembed)



}
exports.help = {
    name:"jogosugestão"
}

