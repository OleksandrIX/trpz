const {MilitaryUnitService, UnitService} = require("../../service");
const {internalServerErrorHandler} = require("../error/error.controller");
const getUnitCreate = (request, response) => {
    try {
        const id = request.baseUrl.split("/")[2];
        response.render('pages/Unit/create.ejs', {
            title: 'Додати підрозділ до в/ч',
            id,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const postUnitCreate = async (request, response) => {
    try {
        const id = request.baseUrl.split("/")[2];
        const {name} = request.body;
        const unit = await UnitService.createUnit({name: name});
        await MilitaryUnitService.addUnitInMilitaryUnit(id, unit._id);
        response.status(201).redirect(`/military-units/${id}`);
    } catch (error) {
        console.log(error)
        internalServerErrorHandler(request, response);
    }
};

module.exports = {
    getUnitCreate,
    postUnitCreate,
};