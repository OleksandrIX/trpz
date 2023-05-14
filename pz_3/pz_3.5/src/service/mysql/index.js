const {MysqlRepositories} = require("../../repositories");

const MilitaryUnitService = require("./MilitaryUnit.Service")(MysqlRepositories);
const UnitService = require("./Unit.Service")(MysqlRepositories);
const ServicemanService = require("./Serviceman.Service")(MysqlRepositories);

module.exports = {
    MilitaryUnitService,
    UnitService,
    ServicemanService,
};
