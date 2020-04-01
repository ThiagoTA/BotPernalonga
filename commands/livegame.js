const Discord = require(`discord.js`)

module.exports.run = (client, message, args) => {
    client.on('message', async message =>{
        if(message.channel.id == '677524768148291604'){ 
            message.react('👎');
            message.react('👍');
    }   
})
    
    let live = new Discord.RichEmbed()
                
        .setDescription(`:warning: ${message.author} é necessário level 1 !`)
        .setColor('#ff0000')  

    if(!message.member.hasPermission("ADD_REACTIONS")) return message.channel.send(live).then(r => r.delete(10000)) 
    message.delete().catch() 
       
        let splitarg = args.join(" ").split(" - ")
        let livegame = splitarg[0]

        let liveerro = new Discord.RichEmbed()
                
        .setDescription(`:thinking: ${message.author} para utilizar sugestão de jogos basta **-livegame (jogo)** !`)
        .setColor('#ffff4d')

            if(!livegame){
                return  message.channel.send(liveerro).then(r => r.delete(12000))
            }
    
        let livesucesso = new Discord.RichEmbed()
                
       .setDescription(`:white_check_mark: ${message.author} sua sugestão de jogo foi enviada com **sucesso** !`)
       .setColor('#00ff00')    

   message.channel.send(livesucesso).then(r => r.delete(10000)) 
        
        let jogoembed = new Discord.RichEmbed()
            .setColor("ORANGE")
            .setTitle(`${message.author.username}`)
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`**${livegame}**`)
            .setFooter(`Sugestão feita por ${message.author.username}`)
            .setTimestamp();
        
        
        message.guild.channels.get(`677524768148291604`).send(jogoembed)



}
exports.help = {
    name:"livegame"
}

