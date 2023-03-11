function* generatorFunc(start, step) {
    while (true) {
        yield start;
        start += step;
    }
}

function sequence(start = 0, step = 1) {
    const generator = generatorFunc(start, step);
    return () => generator.next().value;
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);
let generator3 = sequence();

console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator3());
console.log(generator());
console.log(generator3());
console.log(generator2());