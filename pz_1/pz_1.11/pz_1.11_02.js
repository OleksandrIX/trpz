function returnUniqueNumber(arr) {
    const singleInt = () => {
        arr.sort();
        if (arr[0] !== arr[1]) return arr[0];
        else if (arr[arr.length - 2] !== arr[arr.length - 1]) return arr[arr.length - 1];
        else return 'Всі числа одинакові або є декілька не уникальних чисел';
    }

    if (arr.length >= 3 && arr.length % 2 === 1) console.log(singleInt());
    else console.log('Довжана масива парна');
}

returnUniqueNumber([1, 1, 2])
returnUniqueNumber([17, 17, 3, 17, 17, 17, 17])
returnUniqueNumber([144, 165, 144, 144, 144, 144, 144, 144])
returnUniqueNumber([144, 165, 144, 144, 144, 144, 144, 144, 165])
