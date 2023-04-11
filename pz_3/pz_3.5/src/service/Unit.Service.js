module.exports = (MongoService) => {
    const createUnit = async (unitData) => {
        try {
            const unit = await MongoService.createUnit(unitData);
            console.log('Unit added successfully.');
            return unit;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding unit.');
        }
    };

    const findAllUnits = async () => {
        try {
            return MongoService.findAllUnits();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search units.');
        }
    };

    const findUnitById = async (id) => {
        try {
            return MongoService.findUnitById(id)
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search unit.');
        }
    };

    const findAllUnitsById = async (IDs) => {
        try {
            return MongoService.findAllUnitsById(IDs);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search units.');
        }
    };

    return Object.freeze({
        createUnit,
        findAllUnits,
        findUnitById,
        findAllUnitsById,
    });
};