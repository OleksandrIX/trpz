const {MongoRepositories} = require("../../repositories");

const MilitaryUnitService = require("./MilitaryUnit.Service")(MongoRepositories);
const UnitService = require("./Unit.Service")(MongoRepositories);
const ServicemanService = require("./Serviceman.Service")(MongoRepositories);

module.exports = {
    MilitaryUnitService,
    UnitService,
    ServicemanService,
};
