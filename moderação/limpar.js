const Discord = require('discord.js')
exports.run = async (client, message, args, prefix) => {

    let user = message.mentions.users.first()
    let reason = args[0]
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ **|** Sem **Permissão** !")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ **|** Estou sem **Permissão** !")
    if (!reason) return message.channel.send("📌 **|** É necessario colocar um numero de **2** à **200**")
    if (isNaN(reason)) return message.channel.send("📌 **|** É necessario colocar um numero de **2** à **200**")
    if (reason < 2) return message.channel.send("❌ **|** **Número Baixo** !")
    if (reason > 200) return message.channel.send("❌ **|** **Número Alto** !")

    message.delete()
    let massagem ="";
    let viagem ="";

    message.channel.fetchMessages({
        limit: reason,
    }).then((messages) => {
        if (!user) {
            massagem = messages.filter(m => m.author.id).array().slice(0, reason)
            viagem = massagem.filter(a => a.pinned === false)
        }
        message.channel.bulkDelete(viagem).catch(error => console.log(error.stack))

        let pEmbed = new Discord.RichEmbed()
          .setTitle("Limpeza")
          .addField("Chat limpo por: ", `${message.author.tag}`)
          .setColor("GREEN")
          .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/4/4a/GleamingGrippingAruanas-max-1mb.gif/revision/latest?cb=20170831100037&path-prefix=fr")
        
          message.channel.send(pEmbed)
     })
}

module.exports.help = {
    name: "limpar"
}
