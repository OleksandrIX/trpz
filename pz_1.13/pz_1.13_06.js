const pluck = (arrayObject, key) => {
    const resultArr = [];
    for (const obj of arrayObject) {
        resultArr.push(obj[key]);
    }
    return resultArr;
}

const characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40},
];
console.log(pluck(characters, 'name'));
console.log(pluck(characters, 'age'));