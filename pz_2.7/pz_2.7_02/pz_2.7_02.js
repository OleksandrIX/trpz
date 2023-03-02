const fs = require("fs/promises");
const readline = require("readline/promises");
const {stdin: input, stdout: output} = require("node:process");
const {writeUserLog} = require('./logs/user.log.js');
const {writeLevelLog} = require('./logs/level.log.js');

const rl = readline.createInterface({input, output});

const user = {};
const questionsForGame = [];

const pathQuestion = 'P:\\TRPZ\\trpz\\pz_2.7\\pz_2.7_02\\capital_country.csv';

const parseQuestion = async () => {
    const questions = [];

    const data = await fs.readFile(pathQuestion, 'utf-8');

    const rows = data.split('\r\n');
    const cells = rows.map(row => row.split(','));
    const columns = cells.shift();

    for (let i = 0; i < cells.length; i++) {
        const question = {};
        for (let j = 0; j < cells[i].length; j++) {
            question[`${columns[j]}`] = cells[i][j];
        }
        questions.push(question);
    }

    return questions;
};

parseQuestion()
    .then(questions => {
        const questionsLevel1 = {'1': [], isCompleted: false};
        const questionsLevel2 = {'2': [], isCompleted: false};
        const questionsLevel3 = {'3': [], isCompleted: false};
        const questionsLevel4 = {'4': [], isCompleted: false};
        for (const question of questions) {
            if (question["partsWorld"] === 'Європа') {
                questionsLevel1["1"].push(question);
            } else if (question["partsWorld"] === 'Азія') {
                questionsLevel2["2"].push(question);
            } else if (question["partsWorld"] === 'Південна Америка') {
                questionsLevel3["3"].push(question);
            } else if (question["partsWorld"] === 'Африка') {
                questionsLevel4["4"].push(question);
            } else {
                console.log('Такого рівння складності немає');
            }
        }
        questionsForGame.push(questionsLevel1, questionsLevel2, questionsLevel3, questionsLevel4);
    })
    .then();

const loginUser = () => {
    rl.question("Введіть своє ім'я або username: ")
        .then((answer) => {
            user.username = answer;
            askQuestion().then();
        })
        .catch(err => console.log(err));
};

const askQuestion = async () => {
    let askedQuestion = 0;
    let correctAnswer = 0;
    for (let i = 1; i <= 4; i++) {
        const questionLevel = i;
        const questionIndex = randomQuestion(1, questionsForGame[questionLevel - 1][`${questionLevel}`].length);
        const question = questionsForGame[questionLevel - 1][`${questionLevel}`][questionIndex - 1];

        const answer = await rl.question(`${questionLevel} рівень складності.\n${drawQuestion(question)}`);
        askedQuestion++;
        await writeLevelLog(i, 1, 0)

        if (answer === question['correctAnswer']) {
            correctAnswer++;
            await writeLevelLog(i, 0, 1).then();
            console.log('Правильно. Наступне питання');
        } else {
            console.log('Не правильно');
            break;
        }
    }

    writeUserLog(user.username, askedQuestion, correctAnswer).then();
    console.log(`Задано запитань: ${askedQuestion}, Правильних відповідей: ${correctAnswer}.`);
    gameContinue();
}

const gameContinue = () => {
    rl.question('Ви хочете почати наново? (Y/N) ')
        .then(answer => {
            if (answer.match(/^y(es)?$/i)) {
                askQuestion().then();
            } else {
                rl.close()
            }
        })
}

const game = () => {
    loginUser();
}

const drawQuestion = (question) => {
    return `Номер: ${question['number']}. 
    Запитання:${question['question']}? 
    Варіанти відповідей: ${question['answer1']}, ${question['answer2']}, ${question['answer3']}, ${question['answer4']}. 
    Частина світу: ${question['partsWorld']}\n`
}

const randomQuestion = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

game();