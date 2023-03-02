const fs = require("fs/promises");
const path = require("path");
const readline = require("readline");
const {stdin: input, stdout: output} = require("node:process");

const rl = readline.createInterface({input, output});

function askPath() {
    rl.question('Введіть шлях до csv-файлу:', (answer) => {
        if (path.extname(answer) !== '.csv') {
            console.log('Цей файл не csv.');
            askPath();
        } else {
            fs.access(answer, fs.constants.F_OK)
                .then(() => {
                    parserCSVInJSON(answer);
                    rl.close();
                })
                .catch((err) => {
                    console.log(err);
                    askPath();
                })
        }
    });
}

const parserCSVInJSON = (file) => {
    fs.readFile(file, 'utf-8')
        .then(dataCSV => {
            const rows = dataCSV.split('\r\n');

            const cells = rows.map(row => row.split(','));
            const columns = cells.shift();

            const objs = [];

            for (let i = 0; i < cells.length; i++) {
                const obj = {};
                for (let j = 0; j < cells[i].length; j++) {
                    obj[`${columns[j]}`] = cells[i][j];
                }
                objs.push(obj);
            }
            return objs;
        })
        .then(objs => {
            file = path.basename(file).split('.');
            file.pop();
            file = file.join('.');
            fs.writeFile(`${file}.json`, JSON.stringify(objs))
                .then(() => console.log(`${file}.json створено.`))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

askPath();