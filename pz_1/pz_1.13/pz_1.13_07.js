function count(obj) {
    if (typeof obj === 'function') {
        return obj.length;
    } else if (Array.isArray(obj)) {
        return obj.filter((el)=> typeof el !== "undefined").length;
    } else {
        return Object.keys(obj).length;
    }
}

let a = { a: 1, b: 2 };
console.log(count(a));
let b = function () {};
console.log(count(b));
let c = [1, 2, 3];
console.log(count(c));
let d = [];
d[100] = 1;
d[102] = 1;
d[10] = 1;
console.log(count(d));