function formatDate(date) {
    const daysOfWeek = ['понеділок', 'вівторок', 'середа', 'четверг', 'п\'тниця', 'субота', 'неділя'];
    const nameMonth = ['січеня', 'лютого', 'березеня', 'квітеня', 'травеня', 'червеня', 'липеня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    const time = date.toLocaleTimeString();
    const currentDayOfWeek = daysOfWeek[date.getDay() - 1];
    let [day, month, year] = date.toLocaleDateString().split('.');
    month = nameMonth[parseInt(month) - 1];

    console.log(`${time}, ${currentDayOfWeek} , ${day} ${month} ${year} року`);
}

const date = new Date();
formatDate(date);