const express = require("express");
const middlewares = express.Router();

const request = require("./request")(middlewares);
middlewares.use([request]);

module.exports = middlewares;