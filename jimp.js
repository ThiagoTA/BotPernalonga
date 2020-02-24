const jimp = require('jimp')

async function main() {

let fonte = await jimp.loadFont(jimp.FONT_SANS_32_WHITE)
let mask  = await jimp.read('mascara.png')
//let avatar = await jimp.read('modelo.gif')
let fundo = await jimp.read('base.png')

jimp.read('https://wallpaperaccess.com/full/44729.jpg')
  .then(avatar => {
    
    avatar.resize(130, 130)
    mask.resize(130, 130)
    avatar.mask(mask)
    fundo.print(fonte, 222, 177, '!Thiago')
    fundo.composite(avatar, 40, 70).write('beta.png')

  })
  .catch(err => {
    console.log('Erro ao carregar a imagem')
  });

}
main()