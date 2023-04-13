const {mongoose} = require("mongoose");

module.exports = () => {
    const ServicemanSchema = mongoose.Schema({
        last_name: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        middle_name: {
            type: String,
            required: true,
        },
        rank: {
            type: String,
            required: true,
        },
        birth_date: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        unit:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "units",
        },
    });

    return mongoose.model("servicemans", ServicemanSchema);
};