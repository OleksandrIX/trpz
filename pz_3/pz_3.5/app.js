const express = require("express"),
    engine = require("ejs-mate");
require("dotenv").config();

const app = express();

app.engine('ejs', engine);

const rootDir = __dirname,
    path = require("path")
app.set('views', path.join(rootDir, 'src', 'views'));
app.set('view engine', 'ejs');

const middlewares = require("./src/middlewares")(rootDir);
app.use(middlewares);

const routes = require("./src/routes");
app.use(routes);

const serverConfig = require("./src/config/server.config");
const {port, hostname} = serverConfig;
app.listen(port, hostname, () => {
    console.log(`Application is listening on "${hostname}:${port}"`);
});