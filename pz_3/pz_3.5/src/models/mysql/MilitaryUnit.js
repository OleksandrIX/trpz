const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("military_units", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{timestamps: false});
};