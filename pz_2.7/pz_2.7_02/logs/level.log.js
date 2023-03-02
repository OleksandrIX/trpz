const fs = require("fs/promises");
const path = require("path");

const pathLevelLog = path.join(__dirname, '/level.log');

const readLevelLog = async () => {
    const data = (await fs.readFile(pathLevelLog, 'utf-8')).split('\n');
    const regex = /\d+/g;
    const level = [];
    for (let datum of data) {
        const obj = {};
        let numbers = datum.match(regex).map(match => parseInt(match));
        obj["askedQuestion"] = numbers[0];
        obj["correctAnswer"] = numbers[1];
        level.push(obj)
    }
    return Promise.resolve(level);
}

module.exports.writeLevelLog = async (levelQuestion, askedQuestion = 0, correctAnswer = 0) => {
    const level = await readLevelLog();
    let level1, level2, level3, level4 = '';
    if (levelQuestion === 1) {
        level1 = `Перший рівень – Задано:${level[0]["askedQuestion"] + askedQuestion}, Правильних:${level[0]["correctAnswer"] + correctAnswer},`;
        level2 = `Другий рівень – Задано:${level[1]["askedQuestion"]}, Правильних:${level[1]["correctAnswer"]},`;
        level3 = `Третій рівень – Задано:${level[2]["askedQuestion"]}, Правильних:${level[2]["correctAnswer"]},`;
        level4 = `Четвертий рівень - Задано:${level[3]["askedQuestion"]}, Правильних:${level[3]["correctAnswer"]}`;
    } else if (levelQuestion === 2) {
        level1 = `Перший рівень – Задано:${level[0]["askedQuestion"]}, Правильних:${level[0]["correctAnswer"]},`;
        level2 = `Другий рівень – Задано:${level[1]["askedQuestion"] + askedQuestion}, Правильних:${level[1]["correctAnswer"] + correctAnswer},`;
        level3 = `Третій рівень – Задано:${level[2]["askedQuestion"]}, Правильних:${level[2]["correctAnswer"]},`;
        level4 = `Четвертий рівень - Задано:${level[3]["askedQuestion"]}, Правильних:${level[3]["correctAnswer"]}`;
    } else if (levelQuestion === 3) {
        level1 = `Перший рівень – Задано:${level[0]["askedQuestion"]}, Правильних:${level[0]["correctAnswer"]},`;
        level2 = `Другий рівень – Задано:${level[1]["askedQuestion"]}, Правильних:${level[1]["correctAnswer"]},`;
        level3 = `Третій рівень – Задано:${level[2]["askedQuestion"] + askedQuestion}, Правильних:${level[2]["correctAnswer"] + correctAnswer},`;
        level4 = `Четвертий рівень - Задано:${level[3]["askedQuestion"]}, Правильних:${level[3]["correctAnswer"]}`;
    } else if (levelQuestion === 4) {
        level1 = `Перший рівень – Задано:${level[0]["askedQuestion"]}, Правильних:${level[0]["correctAnswer"]},`;
        level2 = `Другий рівень – Задано:${level[1]["askedQuestion"]}, Правильних:${level[1]["correctAnswer"]},`;
        level3 = `Третій рівень – Задано:${level[2]["askedQuestion"]}, Правильних:${level[2]["correctAnswer"]},`;
        level4 = `Четвертий рівень - Задано:${level[3]["askedQuestion"] + askedQuestion}, Правильних:${level[3]["correctAnswer"] + correctAnswer}`;
    }
    const data = `${level1}\n${level2}\n${level3}\n${level4}`;
    await fs.writeFile(pathLevelLog, data);
}