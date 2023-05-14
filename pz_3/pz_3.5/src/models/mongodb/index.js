const {connect} = require("mongoose");
const {mongodbConfig} = require("../../config/db.config");

(async () => {
    try {
        await connect(mongodbConfig.uri, mongodbConfig.options);
        console.log('Connection with MongoDB has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the MongoDB: ', error);
    }
})();

module.exports = {
    MilitaryUnit: require("./MilitaryUnit")(),
    Unit: require("./Unit")(),
    Serviceman: require("./Serviceman")(),
};