module.exports = (UnitRepo) => {
    const createUnit = async (unitData) => {
        return UnitRepo.create(unitData);
    };

    const findAllUnits = async () => {
        return UnitRepo.findAll();
    };

    const findUnitById = async (id) => {
        try {
            return UnitRepo.findById(id);
        } catch (error) {
            return {status: 404};
        }
    };

    const findAllUnitsById = async (IDs) => {
        const units = [];
        for (const id of IDs) {
            const unit = await UnitRepo.findById(id);
            units.push(unit);
        }
        return units;
    };


    return Object.freeze({
        createUnit,
        findAllUnits,
        findUnitById,
        findAllUnitsById,
    });
};