const express = require("express");
const path = require("path");

module.exports = (rootDir) => {
    const middlewares = express.Router();
    middlewares.use("/datatables/", express.static(path.join(rootDir, "node_modules", "datatables.net-dt")));
    middlewares.use("/datatables/jquery", express.static(path.join(rootDir, "node_modules", "datatables.net", "js")));
    return middlewares;
};