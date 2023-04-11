const MongoService = require("./mongodb");
// const MysqlService = require("./mysql");

const MilitaryUnitService = require("./MilitaryUnits.Service")(MongoService.MilitaryUnitService);
const UnitService = require("./Unit.Service")(MongoService.UnitService);
const ServicemanService = require("./Serviceman.Service")(MongoService.ServicemanService);

module.exports = {
    MilitaryUnitService,
    UnitService,
    ServicemanService,
};