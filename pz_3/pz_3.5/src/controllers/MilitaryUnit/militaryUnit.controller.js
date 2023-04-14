const {MilitaryUnitService, UnitService} = require("../../service"),
    {internalServerErrorHandler} = require("../error/error.controller");

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
            response.render('pages/MilitaryUnit/one.ejs', {
                title: `Військова частина: ${militaryUnit.name}`,
                militaryUnit,
                units: militaryUnit.units
            });
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

const getUnitCreateInMilitaryUnit = (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const id = url[2];
        response.render('pages/MilitaryUnit/createUnit.ejs', {
            title: 'Додати підрозділ до в/ч',
            id,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const postUnitCreateInMilitaryUnit = async (request, response) => {
    try {
        const url = request.originalUrl.split("/");
        const id = url[2];
        const {name} = request.body;
        const unit = await UnitService.createUnit({name: name});
        await MilitaryUnitService.addUnitInMilitaryUnit(id, unit._id);
        response.status(201).redirect(`/military-units/${id}`);
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const getMilitaryUnitEdit = async (request, response) => {
    try {
        const id = request.params.id;
        const militaryUnit = await MilitaryUnitService.findMilitaryUnitById(id);
        let arrayNamesMilitaryUnits = await MilitaryUnitService.findAllMilitaryUnitsName();

        let nameIndex = arrayNamesMilitaryUnits.indexOf(militaryUnit.name);
        if (nameIndex > -1) {
            arrayNamesMilitaryUnits[nameIndex] = "";
        }
        response.render('pages/MilitaryUnit/edit.ejs', {
            title: 'Додати в/ч',
            name: militaryUnit.name,
            location: militaryUnit.location,
            names: arrayNamesMilitaryUnits,
            id: militaryUnit.id,
        });
    } catch (error) {
        internalServerErrorHandler(request, response);
    }
};

const postMilitaryUnitEdit = async (request, response) => {
    try {
        const id = request.params.id;
        const militaryUnitData = request.body;
        await MilitaryUnitService.updateMilitaryUnit(id, militaryUnitData);
        response.status(201).redirect('/military-units');
    } catch (error) {
        internalServerErrorHandler(request, response);
    }

};

const deleteMilitaryUnit = async (request, response) => {
    try {
        const id = request.params.id;
        await MilitaryUnitService.deleteMilitaryUnit(id);
        response.json({status: 200});
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
    getUnitCreateInMilitaryUnit,
    postUnitCreateInMilitaryUnit,
    getMilitaryUnitEdit,
    postMilitaryUnitEdit,
    deleteMilitaryUnit,
};