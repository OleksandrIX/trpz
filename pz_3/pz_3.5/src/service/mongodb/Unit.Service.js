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

    const addServicemanInUnit = async (id, servicemanId) => {
        return UnitRepo.addServiceman(id, servicemanId);
    };

    return Object.freeze({
        createUnit,
        findAllUnits,
        findUnitById,
        findAllUnitsById,
        addServicemanInUnit,
    });
};