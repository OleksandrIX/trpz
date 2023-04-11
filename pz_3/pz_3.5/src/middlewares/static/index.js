const express = require("express");

module.exports = (rootDir) => {
    const middlewares = express.Router();

    const css = require("./public")(rootDir);
    const bootstrap = require("./bootstrap")(rootDir);
    const datatables = require("./datatables")(rootDir);
    const jquery = require("./jquery")(rootDir);

    middlewares.use([css, bootstrap, datatables, jquery]);

    return middlewares;
};