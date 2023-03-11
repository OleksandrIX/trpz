const fs = require("fs/promises");
const path = require("path");

const pathUserLog = path.join(__dirname, '/user.log');

module.exports.writeUserLog = async (username, askedQuestion, correctAnswer) => {
    const date = new Date().toLocaleString();
    const data = `${date}, Користувач: ${username}, Задано запитань: ${askedQuestion}, Правильних відповідей: ${correctAnswer}.\n`;
    await fs.appendFile(pathUserLog, data);
};