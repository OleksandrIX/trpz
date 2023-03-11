function replaceNumber(twoDimensionalArr) {
    const resultArr = []

    for (let i = 0; i < twoDimensionalArr.length; i++) {
        const innerArr = []
        for (let j = 0; j < twoDimensionalArr[i].length; j++) {
            if (i === j) {
                if (twoDimensionalArr[i][j] > 0) {
                    innerArr.push(1)
                } else if (twoDimensionalArr[i][j] <= 0) {
                    innerArr.push(0)
                }
            } else {
                innerArr.push(twoDimensionalArr[i][j])
            }
        }
        resultArr.push(innerArr)
    }

    return resultArr;
}

const draw = (arr) => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            str += arr[i][j] + '\t'
        }
        str += '\n'
    }
    return str;
}

const arr = [[22, -1, 0, 43, 57],
    [-33, 10, 5, 4, 8],
    [3, -1, -44, 44, 87],
    [4, -331, 0, 18, 4],
    [6, -31, 9, 77, 4]];

const result = replaceNumber(arr)

console.log(draw(arr))
console.log(draw(result))

