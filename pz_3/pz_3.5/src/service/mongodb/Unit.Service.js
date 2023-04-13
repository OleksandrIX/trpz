module.exports = ({MilitaryUnitRepo, UnitRepo, ServicemanRepo}) => {
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

    const addUnitInUnit = async (id, unitId) => {
        return UnitRepo.addUnit(id, unitId);
    };

    const addServicemanInUnit = async (id, servicemanId) => {
        return UnitRepo.addServiceman(id, servicemanId);
    };

    const deleteUnit = async (unitId, militaryUnitId) => {
        const unit = await UnitRepo.findById(unitId);
        if (unit.parent) {
            await deleteUnitWithParentUnit(unit);
        } else {
            await deleteUnitWithoutParentUnit(unit, militaryUnitId);
        }
    };

    const deleteUnitWithoutParentUnit = async (unit, militaryUnitId) => {
        const unitId = unit._id;
        await MilitaryUnitRepo.deleteUnit(militaryUnitId, unitId);

        if (unit.servicemans) {
            await deleteServicemans(unit.servicemans);
        }
        if (unit.children) {
            for (const child of unit.children) {
                await deleteChildUnit(child);
            }
        }

        await UnitRepo.deleteUnit(unitId);
    };

    const deleteUnitWithParentUnit = async (unit) => {
        const unitId = unit._id;
        const parentId = unit.parent;
        await UnitRepo.deleteChildUnit(parentId, unitId);

        if (unit.servicemans) {
            await deleteServicemans(unit.servicemans);
        }
        if (unit.children) {
            for (const child of unit.children) {
                await deleteChildUnit(child);
            }
        }

        await UnitRepo.deleteUnit(unitId);
    };

    const deleteChildUnit = async (childId) => {
        const unit = await UnitRepo.findById(childId);

        if (unit.servicemans) {
            await deleteServicemans(unit.servicemans);
        }
        if (unit.children) {
            for (const child of unit.children) {
                await deleteChildUnit(child);
            }
        }

        await UnitRepo.deleteUnit(childId);
    };

    const deleteServicemans = async (servicemans) => {
        for (const serviceman of servicemans) {
            await ServicemanRepo.deleteServiceman(serviceman);
        }
    };

    return Object.freeze({
        createUnit,
        findAllUnits,
        findUnitById,
        addServicemanInUnit,
        addUnitInUnit,
        deleteUnit,
    });
};