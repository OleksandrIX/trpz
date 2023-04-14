$(document).ready(function () {
    $('#military-unit-table').DataTable({
        pageLength: 5,
        lengthMenu: [5,10,20,50,100],
        language: {
            search: "Пошук:",
            lengthMenu: "Відображати _MENU_ записів на сторінці",
            emptyTable: "У вкладці немає в/ч",
            info: "Показано від _START_ до _END_ з _TOTAL_ записів",
            infoEmpty: "Показано від 0 до 0 з 0 записів",
            paginate: {
                previous: "Попередня",
                next: "Наступна",
            }
        },
    });
});

const table = document.getElementById("military-unit-table");
const nameColumn = table.querySelectorAll("td:nth-child(1)");
const locationColumn = table.querySelectorAll("td:nth-child(2)");

const nameClickHandler = (event) => {
    const {value} = event.target.children[0];
    console.log(value)
    location.href = `/military-units/${value}`;
}

const locationClickHandler = (event) => {
    const {value} = event.target.children[0];
    console.log(value)
    location.href = `/military-units/${value}`;
}

for (const nameCell of nameColumn) {
    nameCell.addEventListener("click", nameClickHandler);
}

for (const locationCell of locationColumn) {
    locationCell.addEventListener("click", locationClickHandler);
}