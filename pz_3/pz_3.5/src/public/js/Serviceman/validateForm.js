const dateInput = document.getElementById('birth_date');

dateInput.addEventListener('input', () => {
    const dateValue = dateInput.value;

    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (dateFormat.test(dateValue)) {
        const dateObj = new Date(dateValue);

        if (isNaN(dateObj.getTime())) {
            dateInput.setCustomValidity('Введіть дійсну дату (YYYY-MM-DD)');
        } else {
            dateInput.setCustomValidity('');
        }
    } else {
        dateInput.setCustomValidity('Введіть дату в форматі YYYY-MM-DD');
    }
});
