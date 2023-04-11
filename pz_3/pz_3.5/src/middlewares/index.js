module.exports=(rootDir)=>{
    const middlewares = require("express").Router();

    const httpMiddlewares = require("./http");
    const staticMiddlewares = require("./static")(rootDir);

    middlewares.use([httpMiddlewares, staticMiddlewares]);

    return middlewares;
}