function calculate(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}


console.log(calculate([10, 10, 10, 10]))
console.log(calculate([10, 124, 14, 421, 14]))
console.log(calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))