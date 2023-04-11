const express = require("express");
const path = require("path");

module.exports = (rootDir) => {
    const middlewares = express.Router();
    middlewares.use("/jquery", express.static(path.join(rootDir, "node_modules", "jquery", "dist")));
    return middlewares;
};