module.exports = ({MilitaryUnitService, UnitService}, MysqlService) => {
    const createMilitaryUnit = async (militaryUnitData) => {
        try {
            const militaryUnit = await MilitaryUnitService.createMilitaryUnit(militaryUnitData);
            const id = militaryUnit._id;
            const {name, location} = militaryUnit;
            await MysqlService.createMilitaryUnit({id, name, location});
            console.log('Military unit added successfully.');
            return militaryUnit;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding military unit.');
        }
    };

    const updateMilitaryUnit = async (id, militaryUnitData) => {
        try {
            return MilitaryUnitService.updateMilitaryUnit(id, militaryUnitData);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when updating military unit.');
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

    const deleteMilitaryUnit = async (id) => {
        try {
            const units = await MilitaryUnitService.deleteMilitaryUnit(id);
            for (const unit of units) {
                await UnitService.deleteUnit(unit, id);
            }
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when deleting military unit.');
        }
    };

    return Object.freeze({
        createMilitaryUnit,
        updateMilitaryUnit,
        findAllMilitaryUnits,
        findAllMilitaryUnitsByLocation,
        findMilitaryUnitById,
        findAllMilitaryUnitsName,
        addUnitInMilitaryUnit,
        getUnitsOfMilitaryUnit,
        deleteMilitaryUnit,
    });
};