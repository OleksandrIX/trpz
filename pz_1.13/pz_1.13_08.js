class Task {
    constructor(name, description, startDate, endDate) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    addSubtask(subtask) {
        if (this.subtask) {
            this.subtask = [...this.subtask, subtask];
        } else {
            this.subtask = [subtask];
        }
    }

    showTask() {
        console.log(this);
    }
}

class ExecutableTask extends Task {
    constructor(name, description, startDate, endDate, completionPercentage, isCompleted) {
        super(name, description, startDate, endDate);
        this.completionPercentage = completionPercentage;
        this.isCompleted = isCompleted;
    }
}

const task1 = new ExecutableTask(
    "Випускний",
    "Святкування випуску",
    "26.06.2021р.",
    "27.06.2021р.",
    87,
    false
);

task1.addSubtask(new Task('Підготувати приміщення', 'Підготувати приміщення до випускного', '26.06.2021р.', '26.06.2021р.'));
task1.addSubtask(new Task('Підготувати приміщення', 'Підготувати приміщення до випускного', '26.06.2021р.', '26.06.2021р.'));

task1.showTask();