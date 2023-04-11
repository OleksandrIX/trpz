const {mongoose} = require("mongoose");

module.exports = () => {
    const UnitSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "units",
            default: null,
        },
        servicemans: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "servicemans",
            default: [],
        }],
    });

    return mongoose.model("units", UnitSchema);
};