const {MongoRepositories} = require("../../repositories");

const MilitaryUnitService = require("./MilitaryUnit.Service")(MongoRepositories.MilitaryUnitRepo);
const UnitService = require("./Unit.Service")(MongoRepositories.UnitRepo);
const ServicemanService = require("./Serviceman.Service")(MongoRepositories.ServicemanRepo);

module.exports = {
    MilitaryUnitService,
    UnitService,
    ServicemanService,
};
