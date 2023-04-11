function validateForm(names) {
    names = names.split(',');
    const nameMilitaryUnit = document.forms[0]['name'];

    if (!/^А\d{4}$/g.test(nameMilitaryUnit.value)) {
        nameMilitaryUnit.style.borderColor = "red";
        nameMilitaryUnit.value = ''
        nameMilitaryUnit.placeholder = 'Не вірний формат!';
        return false
    }

    if (names.includes(nameMilitaryUnit.value)) {
        nameMilitaryUnit.style.borderColor = "red";
        nameMilitaryUnit.value = ''
        nameMilitaryUnit.placeholder = 'Така в/ч вже є!';
        nameMilitaryUnit.classList.add('error');
        return false
    }
}