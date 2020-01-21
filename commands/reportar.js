const Discord = require("discord.js")

module.exports.run = (client, message, args) => {

    if(message.content.startsWith("-reportar")){
        msgDel = 1;
        let numberMessages = parseInt(msgDel);
        message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
    }
    
    
    let splitarg = args.join(" ").split(" - ")
    let member = splitarg[0]
    let motivo = splitarg[1]

        if(!member){
            message.channel.send("❌ **|** Por favor, mencione **alguém** para reportar! ``-reportar @<usuário> - (motivo)``")
            return
            
        }
        
        if(!motivo){
            message.channel.send("❌ **|** Por favor, cite o **motivo** para reporta-lo! ``-reportar @<usuário> - (motivo)``")
            return
        }
    
    message.channel.send(`✅ **|** Seu reporte foi enviado com **sucesso**, staff irá analisar seu caso.`)   
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