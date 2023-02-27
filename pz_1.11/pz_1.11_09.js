function reverseArr(arr) {
    const pow = (numb) => (numb * numb);

    const resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        resultArr.push(typeof arr[i] === 'number' ? pow(arr[i]) : arr[i]);
    }

    resultArr.reverse();
    return `[${resultArr.join(',')}]`;
}

console.log(reverseArr([1, 12, 31, 12, 'dsa', true, false]));
