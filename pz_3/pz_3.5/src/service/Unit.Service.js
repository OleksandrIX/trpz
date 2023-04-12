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

    const addServicemanInUnit = async (id, servicemanId) => {
        try {
            return UnitService.addServicemanInUnit(id, servicemanId);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding serviceman in unit.');
        }
    };

    return Object.freeze({
        createUnit,
        findAllUnits,
        findUnitById,
        findAllUnitsById,
        addServicemanInUnit,
    });
};