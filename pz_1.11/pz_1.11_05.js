function validateNumber(numb) {
    if(numb === 0)return 'Число 0';

    const isNumberPositiveOrNegative = () => {
        if (Math.sign(numb) === 1) return 'Число позитивне';
        if (Math.sign(numb) === -1) return 'Число негативне';
    }

    const isNumberSimple = () => {
        numb = Math.abs(numb)
        let i = 2;
        let isNumbSimple = false;
        while (i <= numb) {
            if (numb === i) isNumbSimple = true;
            if (numb % i === 0) break;
            i++;
        }
        if (isNumbSimple) return 'Число просте ';
        return 'Число не просте';
    }

    const isNumberDivOnNumbers = () => {
        numb = Math.abs(numb)
        if (numb % 2 === 0 && numb % 3 === 0 && numb % 5 === 0 && numb % 6 === 0 && numb % 9 === 0) return 'Число ділеться на числа 2, 3, 5, 6, 9 без залишку';
        return 'Число не ділеться на числа 2, 3, 5, 6, 9 без залишку';
    }

    return [isNumberPositiveOrNegative(), isNumberSimple(), isNumberDivOnNumbers()].join('\n');
}

console.log(validateNumber(7) + '\n')
console.log(validateNumber(90) + '\n')
console.log(validateNumber(-13) + '\n')
console.log(validateNumber(0) + '\n')