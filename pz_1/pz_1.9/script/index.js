function task1() {
    clearDiv();
    const resultWindow = document.querySelector('.result');
    const n = 100;
    let i = 2;
    while (i <= n) {
        let j = 2;
        while (j <= i) {
            if (i % j === 0 && j < i) {
                break;
            } else if (j === i) {
                const node = document.createElement('li');
                const textNode = document.createTextNode(`${i}`);
                node.appendChild(textNode);
                resultWindow.appendChild(node);
            }
            j++;
        }
        i++;
    }
}

function task2() {
    clearDiv()
    const n = 10;
    const resultWindow = document.querySelector('.result');

    for (let i = 0; i <= n; i++) {

        if (i === 0) {
            const node = document.createElement('li');
            const textNode = document.createTextNode(`${i} - це нуль`);
            node.appendChild(textNode);
            resultWindow.appendChild(node);
            continue;
        }

        if (i % 2 !== 0) {
            const node = document.createElement('li');
            const textNode = document.createTextNode(`${i} - непарне число`);
            node.appendChild(textNode);
            resultWindow.appendChild(node);
        } else if (i % 2 === 0) {
            const node = document.createElement('li');
            const textNode = document.createTextNode(`${i} - парне число`);
            node.appendChild(textNode);
            resultWindow.appendChild(node);
        }
    }
}

function task3() {
    clearDiv();
    const resultWindow = document.querySelector('.result');

    const printMsg = (i) => {
        const node = document.createElement('li');
        const textNode = document.createTextNode(`${i}`);
        node.appendChild(textNode);
        resultWindow.appendChild(node);
    }

    for (let i = 0; i < 10; printMsg(i++)) {}
}

function task4(count) {
    clearDiv();
    const resultWindow = document.querySelector('.result');
    const drawWindow = document.createElement('div');
    drawWindow.className = 'draw-window';

    const drawTriangle = (countTier) => {
        let i = 0,
            countStar = '',
            star = '';

        while (i < countTier) {
            countStar = Array(i + 2).join('*');
            star += countStar + '\n';
            i++;
        }
        const node = document.createElement('pre');
        const textNode = document.createTextNode(star);
        node.appendChild(textNode);
        drawWindow.appendChild(node);
    }

    const drawTriangularPyramid = (countTier) => {
        let i = 0,
            j = 0,
            space = '',
            countStar = '',
            star = '';

        while (i < countTier) {
            space = Array(countTier - j).join(' ');
            countStar = Array(i * 2 + 2).join('*');
            star += space + countStar + '\n';
            j++;
            i++;
        }
        const node = document.createElement('pre');
        const textNode = document.createTextNode(star);
        node.appendChild(textNode);
        drawWindow.appendChild(node);
    }

    const drawDiamond = (countTier) => {
        let j = Math.floor(countTier / 2),
            countStar = '',
            space = '',
            star = '',
            i = 0;

        if (countTier / 2 !== j) {
            while (i < countTier) {
                countStar = Array(2 * Math.min(i, countTier - 1 - i) + 2).join('*');
                if (i < Math.floor(countTier / 2)) space = Array(countTier - j++).join(' ');
                if (i === Math.floor(countTier / 2)) space = Array(countTier - j--).join(' ');
                if (i > Math.floor(countTier / 2)) space = Array(countTier - j--).join(' ');
                star += space + countStar + '\n';
                i++;
            }
        } else {
            while (i < countTier) {
                countStar = Array(2 * Math.min(i, countTier - 1 - i) + 2).join('*');
                if (i < Math.floor(countTier / 2)) space = Array(countTier - j++).join(' ');
                if (i >= Math.floor(countTier / 2)) space = Array(countTier - (--j)).join(' ');
                star += space + countStar + '\n';
                i++;
            }
        }

        function drawShape(count, drawFn) {
            let shape = "";
            for (let i = 0; i < count; i++) {
                shape += drawFn(i, count) + "\n";
            }
            return shape;
        }

        function drawTriangleRow(i, count) {
            return " ".repeat(count - i - 1) + "*".repeat(i * 2 + 1);
        }

        function drawTriangularPyramidRow(i, count) {
            return " ".repeat(count - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(count - i - 1);
        }

        function drawDiamondRow(i, count) {
            const distance = Math.abs(i - (count - 1) / 2);
            return " ".repeat(distance) + "*".repeat(count - distance * 2) + " ".repeat(distance);
        }


        const node = document.createElement('pre');
        const textNode = document.createTextNode(star);
        node.appendChild(textNode);
        drawWindow.appendChild(node);
    }

    drawTriangle(count);
    drawTriangularPyramid(count);
    drawDiamond(count);

    resultWindow.appendChild(drawWindow);
}

function task5() {
    clearDiv();
    const resultWindow = document.querySelector('.result');

    let numb = 10000;
    let counter = 0;
    let result = 0;
    while (numb >= 50) {
        numb /= 2
        counter++
    }
    result = numb

    let node = document.createElement('li');
    let textNode = document.createTextNode(`${result}`);
    node.appendChild(textNode);
    resultWindow.appendChild(node);
    node = document.createElement('li');
    textNode = document.createTextNode(`${counter}`);
    node.appendChild(textNode);
    resultWindow.appendChild(node);
}

function task6(month) {
    month = parseInt(month)
    switch (month) {
        case 1:
            alert('Зима - Січень')
            break;
        case 2:
            alert('Зима - Лютий')
            break;
        case 3:
            alert('Весна - Березень')
            break;
        case 4:
            alert('Весна - Квітень')
            break;
        case 5:
            alert('Весна - Травень')
            break;
        case 6:
            alert('Літо - Червень')
            break;
        case 7:
            alert('Літо - Липень')
            break;
        case 8:
            alert('Літо - Серпень')
            break;
        case 9:
            alert('Осінь - Вересень')
            break;
        case 10:
            alert('Осінь - Жовтень')
            break;
        case 11:
            alert('Осінь - Листопад')
            break;
        case 12:
            alert('Зима - Гридень')
            break;
        default:
            alert('Такого місяця немає')
    }
}

function task7(temperature) {
    temperature = parseInt(temperature);
    alert(`${(9 / 5) * temperature + 32} градусів по Фаренгейтом`)
}

function task8(day) {
    day = parseInt(day)

    switch (day) {
        case 1:
            alert('Понеділок')
            break;
        case 2:
            alert('Вівторок')
            break;
        case 3:
            alert('Середа')
            break;
        case 4:
            alert('Четверг')
            break;
        case 5:
            alert("П'ятниця")
            break;
        case 6:
            alert('Субота')
            break;
        case 7:
            alert('Неділя')
            break;
        default:
            alert('Такого дня неділі не існую')
    }
}

function clearDiv() {
    document.querySelector('.result').innerHTML = '';
}