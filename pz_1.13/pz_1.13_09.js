class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary = () => this.rate * this.days;
}

const worker = new Worker('Oleksandr', 'Zagorenko', 500, 21);
console.log(worker.getSalary());