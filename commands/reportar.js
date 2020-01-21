const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    
    let splitarg = args.join(" ").split("  ")
    let member = splitarg[0]
    let motivo = splitarg[1]

    let member = message.mentions.members.firts()
        if(!member)
            return message.channel.send(`❌ **|** Por favor, mencione **alguém** para reportar! ``-reportar @<usuário> (motivo)```)
        
        if(!motivo)
            return message.channel.send(`❌ **|** Por favor, cite o motivo para reporta-lo! ``-reportar @<usuário> (motivo)```)
    
    message.guild.channels.get(`659602589989732353`).send(`✅ **|** Seu reporte foi enviado com **sucesso**!`)        
    
    let reportarembed = new Discord.RichEmbed()
        .setColor(`BLACK`)
        .setTitle(`${message.author.tag}`)
        .addField(`${member.user.tag}`,`${motivo}`)
        .addField(`${member.user}`)
        .setTimestamp();
    message.guild.channels.get(`669175263288098848`).send(reportarembed)       

}
exports.help = {
    name:"reportar"
}