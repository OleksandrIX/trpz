const Id = require("../utils/createId"),
    MongoRepositories = require("./mongodb")(Id),
    MysqlRepositories = require("./mysql");

module.exports = {
    MongoRepositories,
    MysqlRepositories,
};