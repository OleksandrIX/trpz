const uniTotal = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    console.log(sum)
}

uniTotal('a')
uniTotal('aaa')
uniTotal('Hello World')
