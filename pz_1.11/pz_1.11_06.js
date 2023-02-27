function deleteDuplicateWithArr(arr) {
    let resultArr = [];
    arr = new Set(arr)

    for (const el of arr) {
        resultArr.push(el);
    }

    return `[${resultArr.join(',')}]`;
}

console.log(deleteDuplicateWithArr([1, 1, 3, 4, 4, 1, 3, 2]))
console.log(deleteDuplicateWithArr([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]))