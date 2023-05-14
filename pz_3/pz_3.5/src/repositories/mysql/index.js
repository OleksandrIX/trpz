const {mysql} = require("../../models");

module.exports = () => {
    const MilitaryUnitRepo = require("./MilitaryUnit.Repo")(mysql.MilitaryUnit);
    const UnitRepo = require("./Unit.Repo")(mysql.Unit);
    const ServicemanRepo = require("./Serviceman.Repo")(mysql.Serviceman);

    return Object.freeze({
        MilitaryUnitRepo,
        UnitRepo,
        ServicemanRepo
    });
};