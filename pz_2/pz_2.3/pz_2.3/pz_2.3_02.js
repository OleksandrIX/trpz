const colors = require('colors');
const player = require('sound-play');
const path = require("path");

console.log(colors.blue('Цей текст синім кольором'));
console.log(colors.yellow('Цей текст жовтим кольором'));


try {
    player.play(path.join(__dirname + '/music/imagine-dragons-bones.mp3'));
} catch (e) {
    console.log(e);
}

