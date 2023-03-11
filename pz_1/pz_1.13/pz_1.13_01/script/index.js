const dayOfWeek = {
    en: {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
    },
    ua: {
        1: "Понеділок",
        2: "Вівторок",
        3: "Середа",
        4: "Четверг",
        5: "П'ятниця",
        6: "Субота",
        7: "Неділя",
    },
};

const inputContainer = document.querySelector('.input-container');
const resultContainer = document.querySelector('.result-container');

if (inputContainer.children) {
    initInputLanguageContainer();
}


function keyUpLanguage(e) {
    if (e.key === 'Enter') {
        selectLanguage();
    }
}

function keyUpNumberOfWeek(e, language) {
    if (e.key === 'Enter') {
        selectNumberOfWeek(language);
    }
}

function initInputLanguageContainer() {
    const labelLanguage = document.createElement('label');
    const inputLanguage = document.createElement('input');

    labelLanguage.className = 'label-language';
    labelLanguage.textContent = 'Виберіть мову “ua” або “en”';
    labelLanguage.style.height = '100%';
    labelLanguage.style.display = 'flex';
    labelLanguage.style.flexDirection = 'column';
    labelLanguage.style.justifyContent = 'center';
    labelLanguage.style.alignItems = 'center';
    labelLanguage.style.textAlign = 'center';

    inputLanguage.className = 'input-language';
    inputLanguage.type = 'text';
    inputLanguage.placeholder = 'Виберіть мову...';
    inputLanguage.style.marginTop = '30px';

    labelLanguage.appendChild(inputLanguage);
    inputContainer.appendChild(labelLanguage);

    if (inputLanguage) {
        inputLanguage.addEventListener('keyup', keyUpLanguage);
    }
}

function selectLanguage() {
    const labelLanguage = document.querySelector('.label-language');
    const inputLanguage = document.querySelector('.input-language');
    const language = inputLanguage.value.toLowerCase();

    inputLanguage.value = '';

    if (language === 'en' || language === 'ua') {
        labelLanguage.className = 'label-number-week';
        inputLanguage.className = 'input-number-week';
        inputLanguage.removeEventListener('keyup', keyUpLanguage)

        if (inputLanguage) {
            inputLanguage.addEventListener('keyup', (ev) => keyUpNumberOfWeek(ev, language));
        }
    }

    if (language === 'en') {
        labelLanguage.innerHTML = 'Enter the day number of the week (from 1 to 7)';
        inputLanguage.placeholder = 'Enter number...';
        labelLanguage.appendChild(inputLanguage)
    } else if (language === 'ua') {
        labelLanguage.innerHTML = 'Введіть номер дня неділі від 1 до 7';
        inputLanguage.placeholder = 'Введіть номер...';
        labelLanguage.appendChild(inputLanguage)
    } else {
        labelLanguage.innerHTML = `Неправильний ввід даних. <br> Виберіть мову “ua” або “en”`
        labelLanguage.appendChild(inputLanguage)
    }
}

function selectNumberOfWeek(language) {
    const labelNumberWeek = document.querySelector('.label-number-week');
    const inputNumberWeek = document.querySelector('.input-number-week');
    const numberOfWeek = !/[^0-9]/.test(inputNumberWeek.value) ? parseInt(inputNumberWeek.value) : 0;
    const errorMsg = language === 'en' ?
        'Incorrect data entry. <br> Enter the day number of the week (from 1 to 7)' : 'Неправильний ввід даних. <br> Введіть номер дня неділі від 1 до 7';

    inputNumberWeek.value = '';

    if (numberOfWeek >= 1 && numberOfWeek <= 7 && numberOfWeek !== 0) {
        resultContainer.innerHTML = '';
        const resultText = document.createElement('h1');
        resultText.textContent = dayOfWeek[language][numberOfWeek];
        resultText.className = 'day-of-week';
        resultText.style.margin = '0';
        resultText.style.height = '100%';
        resultText.style.width = '100%';
        resultText.style.display = 'flex';
        resultText.style.alignItems = 'center';
        resultText.style.justifyContent = 'center';

        resultContainer.appendChild(resultText);
    } else {
        labelNumberWeek.innerHTML = errorMsg;
        labelNumberWeek.appendChild(inputNumberWeek);
    }
}