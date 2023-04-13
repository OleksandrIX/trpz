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
            return MilitaryUnitService.getUnitsOfMilitaryUnit(id);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when getting units in military unit.');
        }
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