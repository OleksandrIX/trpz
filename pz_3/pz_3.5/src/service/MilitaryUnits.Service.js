module.exports = (MongoService) => {
    const createMilitaryUnit = async (militaryUnitData) => {
        try {
            const militaryUnit = await MongoService.createMilitaryUnit(militaryUnitData);
            console.log('Military unit added successfully.');
            return militaryUnit;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding military unit.');
        }
    };

    const findAllMilitaryUnits = async () => {
        try {
            return MongoService.findAllMilitaryUnits();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military units.');
        }
    };

    const findAllMilitaryUnitsByLocation = async (location) => {
        try {
            return MongoService.findAllMilitaryUnitsByLocation(location);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military units.');
        }
    };

    const findMilitaryUnitById = async (id) => {
        try {
            return MongoService.findMilitaryUnitById(id)
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military unit.');
        }
    };

    const findAllMilitaryUnitsName = async () => {
        try {
            return MongoService.findAllMilitaryUnitsName();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search military units.');
        }
    };

    const addUnitInMilitaryUnit = async (id, unitId) => {
        try {
            return MongoService.addUnitInMilitaryUnit(id,unitId);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding unit in military unit.');
        }
    };

    return Object.freeze({
        createMilitaryUnit,
        findAllMilitaryUnits,
        findAllMilitaryUnitsByLocation,
        findMilitaryUnitById,
        findAllMilitaryUnitsName,
        addUnitInMilitaryUnit,
    });
};