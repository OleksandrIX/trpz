const {UnitService, MilitaryUnitService} = require("../../service");
const {internalServerErrorHandler} = require("../error/error.controller");

const getUnit = async (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const militaryUnitId = url[url.indexOf("military-units") + 1];
        const unitId = url[url.indexOf("units") + 1];
        const militaryUnit = await MilitaryUnitService.findMilitaryUnitById(militaryUnitId);
        const unit = await UnitService.getUnitsAndServicemansInUnit(unitId);
        response.render('pages/Unit/unit.ejs', {
            title: 'Створити підрозділ',
            militaryUnit,
            unit,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const getUnitCreate = (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const unitId = url[url.length - 3];
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
        const unitId = url[url.length - 3];
        const body = request.body;
        const unit = await UnitService.createUnit({name: body.name, parent: unitId});
        await UnitService.addUnitInUnit(unitId, unit._id);
        response.status(201).redirect(body.url);
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const getUnitEdit = async (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const militaryUnitId = url[url.indexOf("military-units") + 1];
        const unitId = url[url.indexOf("units") + 1];

        const unit = await UnitService.findUnitById(unitId);
        response.render('pages/Unit/edit.ejs', {
            title: 'Редагувати підрозділ',
            militaryUnitId,
            unit,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }

};

const postUnitEdit = async (request, response) => {
    try {
        const body = request.body;
        const url = request.originalUrl.split("/");
        const unitId = url[url.indexOf("units") + 1];
        await UnitService.updateUnit(unitId, body);
        response.status(201).redirect(body.url);
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const deleteUnit = async (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const militaryUnitId = url[url.indexOf("military-units") + 1];
        const unitId = request.params.id;
        await UnitService.deleteUnit(unitId, militaryUnitId);
        response.json({status: 200});
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

module.exports = {
    getUnit,
    getUnitCreate,
    postUnitCreate,
    getUnitEdit,
    postUnitEdit,
    deleteUnit,
};