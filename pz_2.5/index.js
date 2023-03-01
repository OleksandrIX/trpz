const fs = require("fs");
const {readdir, stat} = require("fs/promises");
const path = require("path");
const colors = require("colors");
const readline = require("readline");
const {stdin: input, stdout: output} = require("node:process");
const EventEmitter = require("events");

const commandEvent = new EventEmitter();
const rl = readline.createInterface({input, output,});
let currentDir = path.join(__dirname);

const listDir = () => {
    fs.readdir(currentDir, (err, files) => {
        if (err) {
            console.log('Каталог не існує або недоступний.');
            return;
        }
        for (const file of files) {
            fs.stat(path.join(currentDir, file), (err, stats) => {
                if (err) {
                    return;
                }

                if (stats?.isDirectory()) {
                    console.log(colors.blue(`--${file}`));
                } else if (stats?.isFile()) {
                    console.log(colors.green(`--${file}`));
                }
            });
        }
        currentLocation();
    });
};

const changeDir = (dir) => {
    fs.access(dir, (err) => {
        if (err) {
            console.log('Каталог не існує або недоступний.');
            return;
        }
        currentDir = dir;
        currentLocation();
    });
};

const createFile = (name) => {
    fs.writeFile(path.join(currentDir, name), '', (err) => {
        if (err) {
            console.log('Неможливо створити файл.');
            return;
        }
        console.log(`Файл ${colors.green(name)} створено.`);
        currentLocation();
    });
};

const createDir = (name) => {
    fs.mkdir(path.join(currentDir, name), (err) => {
        if (err) {
            console.log('Каталог вже існує.');
        } else {
            console.log(`Каталог ${colors.blue(name)} створено.`);
            currentLocation();
        }
    });
};

const viewFile = (name) => {
    fs.readFile(path.join(currentDir, name), 'utf-8', (err, data) => {
        if (err) {
            console.log('Файл не існує або недоступний.')
            return;
        }
        console.log(`\nВміст файлу ${colors.green(path.join(currentDir, name))}:\n`)
        console.log(colors.bgBlack(colors.green(data)));
        currentLocation();
    });
};

const editFile = (name) => {
    rl.question(`Ви дійсно хочете перейменувати ${colors.green(name)}? (Y/N)`, (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            fs.readFile(path.join(currentDir, name), 'utf-8', (err, data) => {
                if (err) {
                    console.log('Ви не може редагувати цей файл.');
                    return;
                }

                console.log(`\nВміст файлу ${colors.green(path.join(currentDir, name))}:\n`)
                console.log(colors.bgBlack(colors.green(data)));

                rl.question('Введіть новий текст:', (newContent) => {
                    fs.writeFile(path.join(currentDir, name), newContent, (err) => {
                        if (err) {
                            console.log('Ви не може редагувати цей файл.');
                            return;
                        }

                        console.log(`Файл ${colors.green(name)} відредактовано.`);
                        currentLocation();
                    });
                });
            });
        } else {
            currentLocation();
        }
    });
};

const renameFileOrDir = (oldName, newName) => {
    rl.question(`Ви дійсно хочете перейменувати ${colors.red(oldName)} (Y/N)`, (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            fs.rename(path.join(currentDir, oldName), path.join(currentDir, newName), (err) => {
                if (err) {
                    console.log('Ви не можете перейменувати.')
                    return;
                }

                console.log(`${colors.red(oldName)} перейменовано на ${colors.green(newName)}.`);
                currentLocation();
            });
        } else {
            currentLocation();
        }
    });
};

const deleteFileOrDir = (name) => {
    rl.question(`Ви дійсно хочете видалити ${colors.red(name)} (Y/N)`, (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            fs.stat(path.join(currentDir, name), (err, stats) => {
                if (err) {
                    console.log(`Ви не можете видалити ${colors.red(name)}`);
                    return;
                }

                if (stats.isFile()) {
                    fs.unlink(path.join(currentDir, name), (err) => {
                        if (err) {
                            console.log(`Ви не можете видалити ${colors.red(name)}`);
                            return;
                        }
                        console.log(`${colors.green(name)} було видалено.`);
                        currentLocation();
                    });
                } else if (stats.isDirectory()) {
                    fs.rmdir(path.join(currentDir, name), (err) => {
                        if (err) {
                            console.log(`Ви не можете видалити ${colors.red(name)}`);
                            return;
                        }
                        console.log(`${colors.blue(name)} було видалено.`);
                        currentLocation();
                    });
                }
            });
        } else {
            currentLocation();
        }
    });
};

const statFileOrDir = (name) => {
    fs.stat(path.join(currentDir, name), async (err, stats) => {
        if (err) {
            console.log(`Ви не можете подивитися інформацію про ${colors.red(name)}`);
            return;
        }

        if (stats.isFile()) {
            console.log(`Інформація про ${colors.green(name)}:`)
            console.log(`Розмір: ${convertSize(stats.size)}`);
            console.log(`Власник: ${stats.uid}`);
            console.log(`Права доступу: ${stats.mode.toString(8).slice(-3)}`);
        } else if (stats.isDirectory()) {
            console.log(`Інформація про ${colors.blue(name)}:`)
            await dirSize(path.join(currentDir, name)).then(size => console.log(`Розмір: ${convertSize(size)}`));
            console.log(`Власник: ${stats.uid}`);
            console.log(`Права доступу: ${stats.mode.toString(8).slice(-3)}`);
        }

        currentLocation();
    });
};

const dirSize = async (dir) => {
    const files = await readdir(dir, {withFileTypes: true});

    const paths = files.map(async (file) => {
        const pth = path.join(dir, file.name);

        if (file.isDirectory()) return await dirSize(pth);
        if (file.isFile()) {
            const {size} = await stat(pth);
            return size;
        }

        return 0;
    });

    return (await Promise.all(paths)).flat(Infinity).reduce((i, size) => i + size, 0);
};

const convertSize = (size) => {
    let result = '';

    if (size < 1024) {
        result = `${size} Bytes`;
    }
    if (size > 1024) {
        size /= 1024;
        result = `${size.toFixed(3)} KB`;
    }
    if (size > 1024) {
        size /= 1024;
        result = `${size.toFixed(3)} MB`;
    }
    if (size > 1024) {
        size /= 1024;
        result = `${size.toFixed(3)} GB`;
    }

    return result;
}

const currentLocation = () => console.log(`Ви зараз перебуваєте ${colors.blue(currentDir)}`);

const showMenu = () => {
    console.log('1 (ls) - перегляд вмісту каталогу;');
    console.log('2 (cd) - перехід між каталогами;');
    console.log('3 (touch) - створення файлів;');
    console.log('4 (mkdir) - створення каталогів;');
    console.log('5 (view) - перегляд вмісту файлу;');
    console.log('6 (edit) - редагування файлів;');
    console.log('7 (rename) - перейменування файлів та каталогів;');
    console.log('8 (rm) - видалення файлів та каталогів;');
    console.log('9 (stat) - перегляд інформації про файл та каталог;');
    console.log('0 (exit) - вихід з програми.');
    console.log('help - показати всі команди.');
};

showMenu();

rl.on('line', (line) => {
    let command;

    if (line.indexOf(" ") !== -1) {
        command = line.slice(0, line.indexOf(" "));
    } else {
        command = line;
    }

    switch (command) {
        case 'ls':
            commandEvent.emit('ls');
            break;
        case 'cd':
            showMenu();
            commandEvent.emit('cd', path.join(line.slice(3)));
            break;
        case 'touch':
            commandEvent.emit('touch', path.join(line.split(" ")[1]));
            break;
        case 'mkdir':
            commandEvent.emit('mkdir', path.join(line.split(" ")[1]));
            break
        case 'view':
            commandEvent.emit('view', path.join(line.split(" ")[1]));
            break;
        case 'edit':
            commandEvent.emit('edit', path.join(line.split(" ")[1]));
            break;
        case 'rename':
            const names = line.split(" ");
            commandEvent.emit('rename', names[1], names[2]);
            break;
        case 'rm':
            commandEvent.emit('rm', path.join(line.split(" ")[1]));
            break;
        case 'stat':
            commandEvent.emit('stat', path.join(line.split(" ")[1]));
            break;
        case 'exit':
            rl.close();
            break;
        case 'help':
            showMenu();
            break;
        default:
            console.log('Такої команди не існує.');
    }
});

commandEvent.on('ls', () => listDir());

commandEvent.on('cd', (dir) => changeDir(dir));

commandEvent.on('touch', (name) => createFile(name));

commandEvent.on('mkdir', (name) => createDir(name));

commandEvent.on('view', (name) => viewFile(name));

commandEvent.on('edit', (name) => editFile(name));

commandEvent.on('rename', (oldName, newName) => renameFileOrDir(oldName, newName));

commandEvent.on('rm', (name) => deleteFileOrDir(name));

commandEvent.on('stat', (name) => statFileOrDir(name));

rl.on('SIGINT', () => {
    rl.question('Ви впевнені, що хочете вийти? (Y/N)', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.close();
        else currentLocation();
    });
});