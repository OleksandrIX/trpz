const {internalServerErrorHandler} = require("../error/error.controller");
const {UnitService, ServicemanService} = require("../../service");
const getServicemanCreate = (request, response) => {
    try {
        const url = request.baseUrl.split("/");
        const unitId = url[url.length - 2];
        const militaryUnitId = url[2];

        response.render('pages/Serviceman/create.ejs', {
            title: 'Додати в/с до підрозділу',
            militaryUnitId,
            unitId,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const postServicemanCreate = async (request, response) => {
    try {
        const previousUrl = request.body.url;
        const url = request.baseUrl.split("/");
        const unitId = url[url.length - 2];
        const servicemanData = request.body;
        servicemanData.unit = unitId;
        const serviceman = await ServicemanService.createServiceman(servicemanData);
        await UnitService.addServicemanInUnit(unitId, serviceman._id);
        response.status(201).redirect(previousUrl);
    } catch (error) {
        console.log(error)
        internalServerErrorHandler(request, response);
    }
};

const getServicemanEdit = async (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const militaryUnitId = url[url.indexOf("military-units") + 1];
        const unitId = url[url.indexOf("units") + 1];
        const servicemanId = url[url.indexOf("servicemans") + 1];

        const serviceman = await ServicemanService.findServicemanById(servicemanId);
        response.render('pages/Serviceman/edit.ejs', {
            title: 'Редагувати в/с',
            serviceman,
            militaryUnitId,
            unitId,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }

};

const postServicemanEdit = async (request, response) => {
    try {
        const body = request.body;
        const url = request.originalUrl.split("/");
        const servicemanId = url[url.indexOf("servicemans") + 1];
        await ServicemanService.updateServiceman(servicemanId, body);
        response.status(201).redirect(body.url);
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const deleteServiceman = async (request, response) => {
    try {
        const servicemanId = request.params.id;
        await ServicemanService.deleteServiceman(servicemanId);
        response.json({status: 200});
    } catch (error) {
        console.log(error)
        internalServerErrorHandler(request, response);
    }
};

module.exports = {
    getServicemanCreate,
    postServicemanCreate,
    getServicemanEdit,
    postServicemanEdit,
    deleteServiceman,
};