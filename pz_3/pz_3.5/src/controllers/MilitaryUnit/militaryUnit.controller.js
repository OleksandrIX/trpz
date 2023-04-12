const {MilitaryUnitService} = require("../../service"),
    {internalServerErrorHandler, notFoundHandler} = require("../error/error.controller");

const getMilitaryUnits = async (request, response) => {
    try {
        const militaryUnits = await MilitaryUnitService.findAllMilitaryUnits();
        response.render('pages/MilitaryUnit/all.ejs', {
            title: 'Військові частини',
            militaryUnits,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const getMilitaryUnitCreate = async (request, response) => {
    try {
        const arrayNamesMilitaryUnits = await MilitaryUnitService.findAllMilitaryUnitsName();
        response.render('pages/MilitaryUnit/create.ejs', {
            title: 'Додати в/ч',
            names: arrayNamesMilitaryUnits,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const postMilitaryUnitCreate = async (request, response) => {
    try {
        const militaryUnitData = request.body;
        await MilitaryUnitService.createMilitaryUnit(militaryUnitData);
        response.status(201).redirect('/military-units');
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const getMilitaryUnitById = async (request, response, next) => {
    try {
        const {id} = request.params;
        if (!(/^\D+$/g).test(id)) {
            const militaryUnit = await MilitaryUnitService.getUnitsOfMilitaryUnit(id);

            if (militaryUnit?.status === 404) {
                notFoundHandler(request, response);
            }else {
                response.render('pages/MilitaryUnit/one.ejs', {
                    title: `Військова частина: ${militaryUnit.name}`,
                    militaryUnit,
                    units: militaryUnit.units
                });
            }
        } else {
            next();
        }
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const getMilitaryUnitsByLocation = async (request, response) => {
    try {
        const {location} = request.params;
        const militaryUnits = await MilitaryUnitService.findAllMilitaryUnitsByLocation(location);
        response.render('pages/MilitaryUnit/location.ejs', {
            title: `Військові частини в місті ${location}`,
            militaryUnits,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

module.exports = {
    getMilitaryUnits,
    getMilitaryUnitCreate,
    postMilitaryUnitCreate,
    getMilitaryUnitsByLocation,
    getMilitaryUnitById,
};