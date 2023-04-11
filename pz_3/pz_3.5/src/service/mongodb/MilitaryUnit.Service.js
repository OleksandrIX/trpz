module.exports = (MilitaryUnitRepo) => {
    const createMilitaryUnit = async (militaryUnitData) => {
        return MilitaryUnitRepo.create(militaryUnitData);
    };

    const findAllMilitaryUnits = async () => {
        return MilitaryUnitRepo.findAll();
    };

    const findAllMilitaryUnitsByLocation = async (location) => {
        return MilitaryUnitRepo.findAllByLocation(location);
    };

    const findMilitaryUnitById = async (id) => {
        try {
            return MilitaryUnitRepo.findById(id);
        } catch (error) {
            return {status: 404};
        }
    };

    const findAllMilitaryUnitsName = async () => {
        const militaryUnits = [];
        const militaryUnitData = await MilitaryUnitRepo.findAll();

        militaryUnitData.forEach((militaryUnit) => {
            militaryUnits.push(militaryUnit.name);
        });

        return militaryUnits;
    };

    const addUnitInMilitaryUnit = async (id, unitId) => {
        return MilitaryUnitRepo.addUnit(id, unitId);
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