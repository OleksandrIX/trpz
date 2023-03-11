const {join} = require("path");
const {readFile, writeFile} = require("fs/promises");

const writeClient = async (ipAddress, port) => {
    let lastKey = 0;

    const clients = JSON.parse(await readFile(join(__dirname, '../database/client.json'), 'utf-8'));

    for (const clientsKey in clients) {
        lastKey = clientsKey;
    }

    clients[`${++lastKey}`] = {
        IpAddressClient: ipAddress,
        port: port,
        Time: new Date().toLocaleString(),
    };

    await writeFile(join(__dirname, '../database/client.json'), JSON.stringify(clients));
};

module.exports = {writeClient};