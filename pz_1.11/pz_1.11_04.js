const add = (a, b) => typeof a === "number" && typeof b === "number" ? a + b : 'Значення не є числовими';

const sub = (a, b) => typeof a === "number" && typeof b === "number" ? a - b : 'Значення не є числовими';

const mul = (a, b) => typeof a === "number" && typeof b === "number" ? a * b : 'Значення не є числовими';

const div = (a, b) => typeof a === "number" && typeof b === "number" ? (b !== 0 ? a + b : 'Знаменик 0') : 'Значення не є числовими';

const calc = (a, b, typeArithmeticOperation) => typeArithmeticOperation(a, b)

console.log(calc(10, 12, add))
console.log(calc(312, 192, sub))
console.log(calc(12, 12, mul))
console.log(calc(120, 12, div))
console.log(calc(120, 0, div))