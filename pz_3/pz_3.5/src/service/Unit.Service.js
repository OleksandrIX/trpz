module.exports = ({UnitService}) => {
    const createUnit = async (unitData) => {
        try {
            const unit = await UnitService.createUnit(unitData);
            console.log('Unit added successfully.');
            return unit;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding unit.');
        }
    };

    const updateUnit = async (id, unitData) => {
        try {
            return UnitService.updateUnit(id, unitData);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when updating unit.');
        }
    };

    const findAllUnits = async () => {
        try {
            return UnitService.findAllUnits();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search units.');
        }
    };

    const findUnitById = async (id) => {
        try {
            return UnitService.findUnitById(id)
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search unit.');
        }
    };

    const findAllUnitsById = async (IDs) => {
        try {
            return UnitService.findAllUnitsById(IDs);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search units.');
        }
    };

    const addUnitInUnit = async (id, unitId) => {
        try {
            return UnitService.addUnitInUnit(id, unitId);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding unit in unit.');
        }
    };

    const addServicemanInUnit = async (id, servicemanId) => {
        try {
            return UnitService.addServicemanInUnit(id, servicemanId);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding serviceman in unit.');
        }
    };

    const deleteUnit = async (unitId, militaryUnitId) => {
        try {
            return UnitService.deleteUnit(unitId, militaryUnitId);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when deleting unit.');
        }
    };

    const getUnitsAndServicemansInUnit = async (id) => {
        try {
            return UnitService.getUnitsAndServicemansInUnit(id);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when getting units and servicemans in unit.');
        }
    };

    return Object.freeze({
        createUnit,
        updateUnit,
        findAllUnits,
        findUnitById,
        findAllUnitsById,
        addServicemanInUnit,
        addUnitInUnit,
        deleteUnit,
        getUnitsAndServicemansInUnit,
    });
};