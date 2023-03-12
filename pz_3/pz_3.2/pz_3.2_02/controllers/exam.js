const {getAllQuestionsInDB, getAllCorrectAnswer} = require("../models/exam");

const getAllTests = async (req, res) => {
    const questions = await getAllQuestionsInDB();
    const keysQuestions = Object.keys(questions);

    res.render('pages/exam', {
        title: 'Exam',
        task: 'Практичне заняття 3.2. Завдання 2',
        user: undefined,
        questions,
        keysQuestions,
    });
};

const saveUserInLocalStorage = async (req, res) => {
    const {name, surname} = req.body;
    const questions = await getAllQuestionsInDB();
    const keysQuestions = Object.keys(questions);

    res.render('pages/exam', {
        title: 'Exam',
        task: 'Практичне заняття 3.2. Завдання 2',
        user: {name, surname},
        questions,
        keysQuestions,
    });
};

const resultExam = async (req, res) => {
    const {name, surname, ...questions} = req.body;

    const allQuestions = await getAllQuestionsInDB();
    const answers = await getAllCorrectAnswer();

    let resultAnswer = {};

    for (const answersKey in answers) {
        resultAnswer[answersKey] = answers[answersKey] === questions[answersKey];
    }

    const numberCorrectAnswers = Object.values(resultAnswer).reduce((acc, val) => val ? acc + 1 : acc, 0);

    res.render('pages/examResult', {
        title: 'Result exam',
        task: 'Практичне заняття 3.2. Завдання 2',
        user: {name, surname},
        allQuestions,
        answers,
        resultAnswer,
        numberCorrectAnswers,
        questions
    });
};

module.exports = {getAllTests, saveUserInLocalStorage, resultExam};