const colors = require('colors');
const player = require('play-sound')();

player.play('./music/imagine-dragons-bones.mp3', (err) => {
    if (err) console.log(`Не вдалося відтворити звук: ${err}`);
})

console.log(colors.blue('Цей текст синім кольором'));
console.log(colors.yellow('Цей текст жовтим кольором'));