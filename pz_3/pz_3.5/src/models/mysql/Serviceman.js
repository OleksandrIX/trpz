const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("servicemans", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
        },
        last_name: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        middle_name: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        rank: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        unit_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{timestamps: false});
};