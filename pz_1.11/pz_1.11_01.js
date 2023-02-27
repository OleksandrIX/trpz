function printArr(n) {
    const arr = Array(n).fill('').map((el, i) => n - i);
    const draw = () => {
        return `n = ${n} ==> [${arr.join(', ')}]`;
    }
    return draw();
}

console.log(printArr(5))
console.log(printArr(2))
console.log(printArr(10))
console.log(printArr(0))

