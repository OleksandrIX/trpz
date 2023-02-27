function numVowelsAndConsonants(text) {
    const vowels = 'аеиоуюяіїє';
    const consonants = 'бвгґджзйклмнпрстфхцчшщ';

    text = text.toLowerCase();

    let numVowels = 0;
    let numConsonants = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (vowels.includes(char)) {
            numVowels++;
        } else if (consonants.includes(char)) {
            numConsonants++;
        }
    }

    return {
        'текст': text,
        'голосних': numVowels,
        'приголосних': numConsonants,
    };
}

console.log(numVowelsAndConsonants('деякий текст'));
console.log(numVowelsAndConsonants('Привіт'));
console.log(numVowelsAndConsonants('Написати функцію яка приймає деякий текст і вираховує скільки в прийнятому тексті голосних літер, а скільки приголосних.'));