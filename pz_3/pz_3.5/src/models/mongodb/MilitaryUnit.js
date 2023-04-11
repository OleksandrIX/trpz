const {mongoose} = require("mongoose");

module.exports = () => {
    const MilitaryUnitSchema = mongoose.Schema({
        name: {
            type: String,
            unique: true,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        units: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "units",
            default: [],
        }]
    });

    return mongoose.model("military_units", MilitaryUnitSchema);
};