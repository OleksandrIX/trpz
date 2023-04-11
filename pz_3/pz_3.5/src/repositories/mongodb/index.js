const {mongodb} = require("../../models");

module.exports = (Id) => {
    const MilitaryUnitRepo = require("./MilitaryUnit.Repo")(mongodb.MilitaryUnit, Id);
    const UnitRepo = require("./Unit.Repo")(mongodb.Unit, Id);
    const ServicemanRepo = require("./Serviceman.Repo")(mongodb.Serviceman, Id);

    return Object.freeze({
        MilitaryUnitRepo,
        UnitRepo,
        ServicemanRepo
    });
};