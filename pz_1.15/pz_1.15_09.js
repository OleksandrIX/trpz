const upperCaseVowels = (str) => {
    const uaVowels = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];
    const enVowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    let resultStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (uaVowels.includes(char.toLowerCase()) || enVowels.includes(char.toLowerCase())) {
            resultStr += char.toUpperCase();
        } else {
            resultStr += char;
        }
    }

    return resultStr;
}

console.log(upperCaseVowels('Привіт'))
console.log(upperCaseVowels('Мова програмування JavaScript'))