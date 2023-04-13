const {UnitService} = require("../../service");
const {internalServerErrorHandler} = require("../error/error.controller");

const getUnitCreate = (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const unitId = url[url.length-3];
        const militaryUnitId = url[2];
        response.render('pages/Unit/create.ejs', {
            title: 'Створити підрозділ',
            militaryUnitId,
            unitId,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const postUnitCreate = async (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const unitId = url[url.length-3];
        const body = request.body;
        const unit = await UnitService.createUnit({name: body.name, parent: unitId});
        await UnitService.addUnitInUnit(unitId, unit._id);
        response.status(201).redirect(body.url);
    } catch (error) {
        console.log(error)
        internalServerErrorHandler(request, response);
    }
};

module.exports = {
    getUnitCreate,
    postUnitCreate,
};