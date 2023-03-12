const indexController = (req, res) => {
    res.render('pages/index', {
        title: 'Home page',
        task: 'Практичне заняття 3.2. Завдання 2'
    });
};

module.exports = {indexController};