const MongoService = require("./mongodb");
const MysqlService = require("./mysql");

const MilitaryUnitService = require("./MilitaryUnits.Service")(MongoService, MysqlService);
const UnitService = require("./Unit.Service")(MongoService);
const ServicemanService = require("./Serviceman.Service")(MongoService);

module.exports = {
    MilitaryUnitService,
    UnitService,
    ServicemanService,
};