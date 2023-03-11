function findFrequencyWords(text) {
    const exp = /\p{L}+/gu;
    const words = text.match(exp);

    const frequency = {}
    for (let word of words) {
        word = word.toLowerCase();
        if (frequency[word]) frequency[word]++;
        else frequency[word] = 1;
    }

    return frequency;
}

const text = 'Це є текст, який буде розбитий на окремі слова. Текст містить деякі повторення слів.';
const frequencyWord = findFrequencyWords(text);
console.log(frequencyWord);