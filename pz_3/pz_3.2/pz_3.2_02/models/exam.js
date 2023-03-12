const fs = require("fs/promises");
const path = require("path");

const getAllQuestionsInDB = async () => {
    let data = await fs.readFile(path.join(__dirname, '../database/test.json'), 'utf-8');
    data = JSON.parse(data);
    return Promise.resolve(data);
};

const getAllCorrectAnswer = async () => {
    let data = await fs.readFile(path.join(__dirname, '../database/test.json'), 'utf-8');
    data = JSON.parse(data);
    let result = {};
    for (const [key, value] of Object.entries(data)) {
        result[key] = value['correct'];
    }
    return Promise.resolve(result);
};

module.exports = {getAllQuestionsInDB, getAllCorrectAnswer};