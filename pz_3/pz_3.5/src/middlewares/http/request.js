const express = require("express");

module.exports = () => {
    const middlewares = express.Router();

    middlewares.use(express.json());
    middlewares.use(express.urlencoded({extended: false}));

    return middlewares;
};