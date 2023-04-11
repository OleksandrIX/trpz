const express = require("express");
const path = require("path");

module.exports = (rootDir) => {
    const middlewares = express.Router();
    middlewares.use("/bootstrap/css", express.static(path.join(rootDir, "node_modules", "bootstrap", "dist", "css")));
    return middlewares;
};