const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("units", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        military_unit_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_id:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },{timestamps: false});
};