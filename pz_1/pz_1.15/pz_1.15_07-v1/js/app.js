const logContainer = document.querySelector('.log-container');

let isGameRunning = false;

async function startGame() {
    let targetNumber = Math.floor(Math.random() * 101);
    let numberOfAttempts = 0;
    isGameRunning = true;
    createLogText('h6', 'Нова гра');
    console.log(targetNumber);

    while (isGameRunning) {
        await sleep(1);
        let number = prompt('Вгадайте число від 0 до 100');
        numberOfAttempts++;

        number = parseInt(number);

        if (isNaN(number) || number < 0 || number > 100) {
            alert('Введіть число від 0 до 100');
            numberOfAttempts--;
            continue;
        }

        if (number === targetNumber) {
            createLogText('li', `За ${numberOfAttempts} спроб ви вгадали число ${targetNumber}`);
            isGameRunning = confirm('Грати ще раз?');
            if (isGameRunning) {
                createLogText('h6', 'Нова гра');
                targetNumber = Math.floor(Math.random() * 101);
                numberOfAttempts = 0;
                console.log(targetNumber);
            }
        } else {
            const hint = getHint(number, targetNumber);
            createLogText('li', `${new Date().toLocaleString()} Спроба ${numberOfAttempts}: число ${number} - ${hint}`);
        }
    }
}

function getHint(number, target) {
    const difference = Math.abs(number - target);
    if (difference < 10) return 'дуже гаряче';
    else if (difference < 20) return 'гаряче';
    else if (difference < 30) return 'тепло';
    else if (difference < 50) return 'холодно';
    else return 'дуже холодно';
}

function sleep(second) {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}

function createLogText(tagName, textContent) {
    const logText = document.createElement(tagName);
    logText.textContent = textContent;
    logContainer.appendChild(logText);
}

