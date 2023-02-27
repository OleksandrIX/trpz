const removeDuplicateWords = (str) => {
    const words = str.split(' ');
    const uniqueWords = [];

    for (const word of words) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }

    return `"${str}" ==> "${uniqueWords.join(' ')}"`;
}

console.log(removeDuplicateWords('альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма гамма дельта'));