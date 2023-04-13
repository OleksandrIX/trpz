const {internalServerErrorHandler} = require("../error/error.controller");
const {UnitService, ServicemanService} = require("../../service");
const getServicemanCreate = (request, response) => {
    try {
        const url = request.baseUrl.split("/");
        const unitId = url[url.length - 2];
        const militaryUnitId = url[2];

        response.render('pages/Serviceman/create.ejs', {
            title: 'Додати в/ч до підрозділу',
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
        const serviceman = await ServicemanService.createServiceman(servicemanData);
        await UnitService.addServicemanInUnit(unitId, serviceman._id);
        response.status(201).redirect(previousUrl);
    } catch (error) {
        console.log(error)
        internalServerErrorHandler(request, response);
    }

};

module.exports = {
    getServicemanCreate,
    postServicemanCreate,
};