const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * 2);
}

function play() {
    const guessOptions = ['Орел', 'Решка'];
    const guess = guessOptions[getRandomNumber()];

    readline.question('Введіть свою догадку (1 - Орел, 2 - Решка): ', (answer) => {
        const guessIndex = parseInt(answer) - 1;

        if (guessIndex < 0 || guessIndex > 1) {
            console.log('Ви ввели недійсне значення');
            play();
        } else {
            if (guess === guessOptions[guessIndex]) {
                console.log('Ви виграли');
            } else {
                console.log('Ви програли');
            }

            readline.question('Хочете зіграти ще раз? (так/ні): ', (answer) => {
                if (answer.toLowerCase() === 'так') {
                    play();
                } else {
                    readline.close();
                }
            });
        }
    });
}

play()