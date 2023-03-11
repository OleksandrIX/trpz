const {writeClient} = require("../models/client");

const indexController = (req, res) => {
    res.render('pages/index', {
        title: 'Home page',
        task: 'Практичне заняття 3.2. Завдання 1'
    });
};

const addClientToJSON = async (req, res) => {
    const ipAddress = (req.socket.remoteAddress).match(/(\d{1,3}\.){3}\d{1,3}/g)[0];
    const port = req.socket.remotePort.toString();

    try {
        await writeClient(ipAddress, port);
        console.log(`Client with ip-address: ${ipAddress} add to client.json!`);
    } catch (e) {
        console.log(e);
    }

    const referer = req.header('Referer');
    res.redirect(referer);
}

module.exports = {indexController, addClientToJSON}