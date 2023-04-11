module.exports = (MilitaryUnit, Id) => {
    const create = ({name, location}) => {
        return MilitaryUnit.create({_id: new Id(), name, location});
    };

    const findAll = () => {
        return MilitaryUnit.find({});
    };

    const findAllByLocation = (location) => {
        return MilitaryUnit.find({location: location});
    };

    const findById = (id) => {
        return MilitaryUnit.findOne({_id: id});
    };

    const addUnit = (id, unitId) => {
        return MilitaryUnit.findOneAndUpdate(
            {_id: id},
            {$push: {units: unitId}},
        );
    }

    return Object.freeze({
        create,
        findAll,
        findAllByLocation,
        findById,
        addUnit,
    });
};