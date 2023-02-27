function Greetable(str) {
    this.str = str;
}

Greetable.prototype.greet = function (greeting) {
    return `${greeting}, ${this.str}!`;
}

function createGreetable(str) {
    return new Greetable(str);
}

const greet = createGreetable('Sasha');
console.log(greet.greet('Hello'));