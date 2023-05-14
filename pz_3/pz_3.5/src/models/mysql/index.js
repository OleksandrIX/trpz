const {Sequelize} = require("sequelize");
const {mysqlConfig} = require("../../config/db.config");

const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, mysqlConfig.options);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection with MySQL has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the MySQL: ', error);
    }
})();

const mysql = {};
mysql.Sequelize = Sequelize;
mysql.sequelize = sequelize;

const MilitaryUnit = require("./MilitaryUnit")(mysql.sequelize);
const Unit = require("./Unit")(mysql.sequelize);
const Serviceman = require("./Serviceman")(mysql.sequelize);

MilitaryUnit.hasMany(Unit, {foreignKey: "military_unit_id"});
Unit.belongsTo(MilitaryUnit, {foreignKey: "military_unit_id"});

Unit.hasMany(Unit, {foreignKey: "parent_id"});
Unit.belongsTo(Unit, {foreignKey: "parent_id"});

Unit.hasMany(Serviceman, {foreignKey: "unit_id"});
Serviceman.belongsTo(Unit, {foreignKey: "unit_id"});

(async () => {
    try {
        await sequelize.sync({force: false});
        console.log('re-sync MySQL');
    } catch (error) {
        console.log('Unable to connect to the MySQL: ', error);
    }
})();

module.exports = {
    MilitaryUnit,
    Unit,
    Serviceman,
};