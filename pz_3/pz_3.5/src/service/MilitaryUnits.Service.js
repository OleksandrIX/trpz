module.exports = ({MilitaryUnitService, UnitService, ServicemanService}) => {
    const createMilitaryUnit = async (militaryUnitData) => {
        try {
            const militaryUnit = await MilitaryUnitService.createMilitaryUnit(militaryUnitData);
            console.log('Military unit added successfully.');
            return militaryUnit;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding military unit.');
        }
    };

    const findAllMilitaryUnits = async () => {
        try {
            return MilitaryUnitService.findAllMilitaryUnits();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military units.');
        }
    };

    const findAllMilitaryUnitsByLocation = async (location) => {
        try {
            return MilitaryUnitService.findAllMilitaryUnitsByLocation(location);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military units.');
        }
    };

    const findMilitaryUnitById = async (id) => {
        try {
            return MilitaryUnitService.findMilitaryUnitById(id)
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military unit.');
        }
    };

    const findAllMilitaryUnitsName = async () => {
        try {
            return MilitaryUnitService.findAllMilitaryUnitsName();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military units.');
        }
    };

    const addUnitInMilitaryUnit = async (id, unitId) => {
        try {
            return MilitaryUnitService.addUnitInMilitaryUnit(id, unitId);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding unit in military unit.');
        }
    };

    const getUnitsOfMilitaryUnit = async (id) => {
        try {
            const militaryUnit = await MilitaryUnitService.findMilitaryUnitById(id);
            const unitsOfMilitaryUnit = await UnitService.findAllUnitsById(militaryUnit.units);

            const resultMilitaryUnit = {
                id: militaryUnit._id,
                name: militaryUnit.name,
                location: militaryUnit.location,
                units: [],
            };

            for (let unit of unitsOfMilitaryUnit) {
                const resultUnit = {
                    id: unit._id,
                    name: unit.name,
                    parent: unit.parent,
                };
                if (unit.children.length !== 0) {
                    resultUnit.children = await createMapUnitToChildrenUnit(unit._id, unit.children);
                }
                if (unit.servicemans.length !== 0) {
                    resultUnit.servicemans = await createMapUnitToServicemans(unit._id, unit.servicemans);
                }
                resultMilitaryUnit.units.push(resultUnit);
            }

            return resultMilitaryUnit;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when getting units in military unit.');
        }
    };

    const createMapUnitToChildrenUnit = async (unitId, childrenUnits) => {
        const map = {};
        const unit = await UnitService.findUnitById(unitId);
        const children = await UnitService.findAllUnitsById(childrenUnits);
        map.units = children;
        return map;
    };

    const createMapUnitToServicemans = async (unitId, arrayServicemans) => {
        const map = {};
        const unit = await UnitService.findUnitById(unitId);
        const servicemans = await ServicemanService.findAllServicemansById(arrayServicemans);
        map.servicemans = servicemans;
        return map;
    };

    return Object.freeze({
        createMilitaryUnit,
        findAllMilitaryUnits,
        findAllMilitaryUnitsByLocation,
        findMilitaryUnitById,
        findAllMilitaryUnitsName,
        addUnitInMilitaryUnit,
        getUnitsOfMilitaryUnit,
    });
};