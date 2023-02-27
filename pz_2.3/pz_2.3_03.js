const path = require('path');

const filePath = process.argv[2];

console.log('Повний шлях:', path.resolve(filePath));
console.log('Назва файлу:', path.basename(filePath));
console.log('Розширення файлу:', path.extname(filePath));

const osType = process.platform;
let osFamily = '';

if (osType === 'win32') {
    osFamily = 'Windows';
} else {
    osFamily = 'Unix';
}

console.log('Сімейство ОС:', osFamily);
