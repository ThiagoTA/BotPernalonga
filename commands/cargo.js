const Discord = require(`discord.js`) 

exports.run = (client, message, args) => {

        message.author.user.addRole(`anime`)
        message.channel.send("ok")
    
        

    
}

exports.help = {
    name: "cargo"
}