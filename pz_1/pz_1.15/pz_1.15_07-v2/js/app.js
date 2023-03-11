const numberContainer = document.querySelector('.number-container');
const logContainer = document.querySelector('.log-container');
const start = document.querySelector('.start');

start.classList.add('hover');

let isGameRunning = false;

let targetNumber = 0,
    numberOfAttempts = 0,
    number = 0;

const handleStartClick = (e) => {
    startGame();
}

start.addEventListener('click', handleStartClick);

function startGame() {
    start.classList.remove('hover')
    start.removeEventListener('click', handleStartClick)

    numberContainer.innerHTML = '';

    initButtons();

    targetNumber = Math.floor(Math.random() * 101);
    numberOfAttempts = 0;
    number = 0;
    isGameRunning = true;

    console.log(targetNumber);

    createLogText('h4', 'Нова гра');

    initButtonOnclick();
}

function getHint(number, target) {
    const difference = Math.abs(number - target);
    if (difference < 10) return 'дуже гаряче';
    else if (difference < 20) return 'гаряче';
    else if (difference < 30) return 'тепло';
    else if (difference < 50) return 'холодно';
    else return 'дуже холодно';
}

function initButtons() {
    for (let i = 1; i <= 100; i++) {
        createButton(i);
    }
}

function initButtonOnclick() {
    for (let i = 1; i <= 100; i++) {
        buttonOnclick(i);
    }
}

const handleClick = async (e) => {
    const btn = e.target;
    number = parseInt(btn.textContent);

    numberOfAttempts++;

    if (number === targetNumber) {
        btn.style.backgroundColor = 'green';
        createLogText('li', `За ${numberOfAttempts} спроб ви вгадали число ${targetNumber}`);
        await sleep(1);
        isGameRunning = confirm('Грати ще раз?');
        if (isGameRunning) {
            startGame();
        } else {
            start.classList.add('hover');
            start.addEventListener('click', handleStartClick);

            const children = numberContainer.children;
            for (const child of children) {
                child.classList.remove('hover');
                child.removeEventListener('click', handleClick);
            }
        }
    } else {
        btn.style.backgroundColor = 'red';
        const hint = getHint(number, targetNumber);
        createLogText('li', `${new Date().toLocaleString()} Спроба ${numberOfAttempts}: число ${number} - ${hint}`);
    }

    btn.classList.remove('hover');
    btn.removeEventListener('click', handleClick);
}

function buttonOnclick(number) {
    const btn = document.querySelector(`.btn-${number}`)
    btn.classList.add('hover')
    btn.addEventListener('click', handleClick)
}


function createButton(number) {
    const button = document.createElement('button');
    button.className = `btn btn-${number}`
    button.textContent = number;
    numberContainer.appendChild(button);
}

function createLogText(tagName, textContent) {
    const logText = document.createElement(tagName);
    logText.textContent = textContent;
    logContainer.appendChild(logText);
}

const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000));