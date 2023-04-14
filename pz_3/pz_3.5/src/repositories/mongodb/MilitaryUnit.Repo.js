module.exports = (MilitaryUnit, Id) => {
    const create = ({name, location}) => {
        return MilitaryUnit.create({_id: new Id(), name, location});
    };

    const update = (id, {name, location}) => {
        return MilitaryUnit.updateOne(
            {_id: id},
            {
                name: name,
                location: location,
            }
        );
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
    };

    const deleteUnit = (id, unitId) => {
        return MilitaryUnit.findOneAndUpdate(
            {_id: id},
            {$pull: {units: unitId}},
        );
    };

    const deleteMilitaryUnit = (id) => {
        return MilitaryUnit.deleteOne({_id: id})
    };

    return Object.freeze({
        create,
        update,
        findAll,
        findAllByLocation,
        findById,
        addUnit,
        deleteUnit,
        deleteMilitaryUnit,
    });
};