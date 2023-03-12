const fs = require("fs/promises");
const path = require("path");
const {getAllQuestionsInDB, getAllCorrectAnswer} = require("./exam");

const saveUserInDB = async (name, surname, questions) => {
    const file = path.join(__dirname, '../database', 'results.json');
    let results = await fs.readFile(file, 'utf-8');
    results = JSON.parse(results);

    const [allQuestions, answers] = await Promise.all([getAllQuestionsInDB(), getAllCorrectAnswer()]);

    let resultAnswer = {};

    for (const answersKey in answers) {
        resultAnswer[answersKey] = answers[answersKey] === questions[answersKey];
    }

    const numberCorrectAnswers = Object.values(resultAnswer).reduce((acc, val) => val ? acc + 1 : acc, 0);

    results.push({name, surname, total: Object.keys(allQuestions).length, correct: numberCorrectAnswers});
    await fs.writeFile(file, JSON.stringify(results));

    return Promise.resolve(`${name} ${surname} додано до файлу results.json`);
};

module.exports = {saveUserInDB};