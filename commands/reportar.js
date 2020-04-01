const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    
    message.delete().catch() 
    
    let splitarg = args.join(" ").split(" - ")
    let member = splitarg[0]
    let motivo = splitarg[1]

        let mencionar = new Discord.RichEmbed()
                
            .setDescription(`:warning: ${message.author} mencione alguém para reportar! **-reportar @<usuário> - (motivo)** !`)
            .setColor('#ff0000')   
    
        if(!member){
            return message.channel.send(mencionar).then(r => r.delete(10000))   
        }
        
        let motivo1 = new Discord.RichEmbed()
                
            .setDescription(`:warning: ${message.author} cite o motivo para reporta-lo! **-reportar @<usuário> - (motivo)** !`)
            .setColor('#ff0000')   

        if(!motivo){
            return message.channel.send(motivo1).then(r => r.delete(10000)) 
        }
        
    let sucess = new Discord.RichEmbed()
                
        .setDescription(`:white_check_mark: ${message.author} seu reporte foi enviado com **sucesso**, staff irá analisar seu caso !`)
        .setColor('#00ff00')    

    message.channel.send(sucess).then(r => r.delete(10000)) 
 
    let reportarembed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle(`REPORT`)
        .setThumbnail(`${message.author.avatarURL}`)
        .addField("Membro Reportado:",`__${member}__`)
        .addField("Motivo do Reporte:",`**${motivo}**`)
        .setFooter(`reporte feito por ${message.author.username}`)
        .setTimestamp();
    message.guild.channels.get(`669175263288098848`).send(reportarembed)      

}
exports.help = {
    name:"reportar"
}