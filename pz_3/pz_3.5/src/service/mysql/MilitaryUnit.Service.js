module.exports = ({MilitaryUnitRepo, UnitRepo, ServicemanRepo}) => {
    const createMilitaryUnit = async (militaryUnitData) => {
        return MilitaryUnitRepo.create(militaryUnitData);
    };

    const updateMilitaryUnit = async (id, militaryUnitData) => {
        return MilitaryUnitRepo.update(id, militaryUnitData);
    };

    const findAllMilitaryUnits = async () => {
        return MilitaryUnitRepo.findAll();
    };

    const findAllMilitaryUnitsByLocation = async (location) => {
        return MilitaryUnitRepo.findAllByLocation(location);
    };

    const findMilitaryUnitById = async (id) => {
        return MilitaryUnitRepo.findById(id);
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

    const getUnitsOfMilitaryUnit = async (id) => {
        const militaryUnit = await MilitaryUnitRepo.findById(id);
        const unitsOfMilitaryUnit = await UnitRepo.findAllById(militaryUnit.units);

        const resultMilitaryUnit = {
            id: militaryUnit._id,
            name: militaryUnit.name,
            location: militaryUnit.location,
            units: [],
        };

        for (let unit of unitsOfMilitaryUnit) {
            const resultUnit = {
                id: unit._id,
                name: unit.name,
                parent: unit.parent,
            };
            if (unit.children.length !== 0) {
                resultUnit.children = await UnitRepo.findAllById(unit.children);
            }
            if (unit.servicemans.length !== 0) {
                resultUnit.servicemans = await ServicemanRepo.findAllById(unit.servicemans);
            }
            resultMilitaryUnit.units.push(resultUnit);
        }

        return resultMilitaryUnit;
    };

    const deleteMilitaryUnit = async (id) => {
        const militaryUnit = await MilitaryUnitRepo.findById(id);
        await MilitaryUnitRepo.deleteMilitaryUnit(id);
        return militaryUnit.units;
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