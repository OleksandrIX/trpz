function convertNumberInObject(num) {
    const numString = num.toString();
    const numLength = numString.length;
    const arr = numString.split('');
    if (numLength === 1) {
        return {'одиниці': parseInt(arr[0])};
    } else if (numLength === 2) {
        return {
            'одиниці': parseInt(arr[1]),
            'десятки': parseInt(arr[0]),
        };
    } else if (numLength === 3) {
        return {
            'одиниці': parseInt(arr[2]),
            'десятки': parseInt(arr[1]),
            'сотні': parseInt(arr[0]),
        };
    } else if (numLength === 4) {
        return {
            'одиниці': parseInt(arr[3]),
            'десятки': parseInt(arr[2]),
            'сотні': parseInt(arr[1]),
            'тисячи': parseInt(arr[0]),
        };
    } else {
        return 'Число більше 9999';
    }
}

console.log(convertNumberInObject(4));
console.log(convertNumberInObject(431));
console.log(convertNumberInObject(21));
console.log(convertNumberInObject(1932));
console.log(convertNumberInObject(10000));
