const express = require("express");
const path = require("path");

module.exports = (rootDir) => {
    const middlewares = express.Router();
    middlewares.use("/public", express.static(path.join(rootDir, "src", "public")));
    return middlewares;
};