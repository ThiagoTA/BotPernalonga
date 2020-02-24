const Discord = require('discord.js');
const config = require('./config.json');
const jimp = require('jimp');
const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Olá meu prefixo é `-`")}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`,``);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
  try {
    let commandFile = require(`./moderação/${command}.js`);
    delete require.cache[require.resolve(`./moderação/${command}.js`)];
    return commandFile.run(client, message, args);
} catch (err) {
      console.error("Erro:" + err)
}

})

client.on('guildMemberAdd', async member => {

    let canal = client.channels.get('659599505817206814')
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_WHITE)
    let mask  = await jimp.read('mascara.png')
    let fundo = await jimp.read('base.png')

jimp.read(member.user.displayAvatarURL)
  .then(avatar => {
    
    avatar.resize(130, 130)
    mask.resize(130, 130)
    avatar.mask(mask)
    fundo.print(fonte, 222, 177, member.user.username)
    fundo.composite(avatar, 40, 70).write('bemvindo.png')
    canal.send(`<:MDS:632329143505256469>**Bem Vindo ao servidor Live Lorran 🎬** \n ${member.user}, lembra-se de ler às <#659601100835651604> e dar uma olhada no <#659601205428748332> para ficar por dentro de tudo.\nVenha interejar conosco no canal <#659602955053432895>.`, { files: ["bemvindo.png"]});

  })
  .catch(err => {
    console.log('Erro ao carregar a imagem')
  });

})

client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

    let messages = [`${client.users.size} pessoas`,
                    `-ajuda`,
                    `-sobre`,
                    `${client.users.size} pessoas`
                    ]

    setInterval(() => {
        let randomMessages = Math.floor(Math.random() * (messages.length - 1) + 1)
        client.user.setActivity(messages[randomMessages])
    }, 10000)

    //0 = Jogando
    //1 = Transmitindo
    //2 = Ouvindo
    //3 = Assistindo
})


client.login(config.token) 