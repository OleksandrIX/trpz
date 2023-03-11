function returnSimplifiedArr(twoDimensionalArr) {
    let resultArr = [];
    for (const oneDimensionalArr of twoDimensionalArr) {
        for (const el of oneDimensionalArr) {
            resultArr.push(el);
        }
    }
    resultArr.sort((el1, el2) => el1 - el2);
    return `[${resultArr.join(',')}]`;
}

console.table(returnSimplifiedArr([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
console.log(returnSimplifiedArr([[3, 2, 1], [4, 6, 5], [231, 13, 113], [9, 7, 8]]))
console.log(returnSimplifiedArr([[], [], [], []]))
