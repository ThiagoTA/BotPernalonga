const Discord = require(`discord.js`)

module.exports.run = (client, message, args) => {
    client.on('message', async message =>{
        if(message.channel.id == '659602483399753748'){ 
            message.react('👎');
            message.react('👍');
    }   
})

    let level = new Discord.RichEmbed()
                
        .setDescription(`:warning: ${message.author} é necessário level 1 !`)
        .setColor('#ff0000')  

    if(!message.member.hasPermission("ADD_REACTIONS")) return message.channel.send(level).then(r => r.delete(10000)) 
        message.delete().catch() 
       
        let splitarg = args.join(" ").split(" - ")
        let sugestão = splitarg[0]

        let erro = new Discord.RichEmbed()
                
                .setDescription(`:thinking: ${message.author} para utilizar a sugestão basta utilizar **-sugestão (texto)** !`)
                .setColor('#ffff4d')    

            if(!sugestão){
                return  message.channel.send(erro).then(r => r.delete(15000))
            }
        
        let suceembed = new Discord.RichEmbed()
                
            .setDescription(`:white_check_mark: ${message.author} sua sugestão foi enviada com **sucesso** !`)
            .setColor('#00ff00')    

        message.channel.send(suceembed).then(r => r.delete(10000)) 

        let sugestãoembed = new Discord.RichEmbed()
            .setColor("#bd26f7")
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

