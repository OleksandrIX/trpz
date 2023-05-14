module.exports = (MilitaryUnit) => {
    const create = ({id, name, location}) => {
        return MilitaryUnit.create({id, name, location});
    };

    const update = (id, {name, location}) => {
        return MilitaryUnit.update(
            {
                name: name,
                location: location,
            },
            {where: {id: id}},
        );
    };

    const deleteMilitaryUnit = (id) => {
        return MilitaryUnit.destroy({where: {id: id}})
    };

    // const addUnit = (id, unitId) => {
    //     return MilitaryUnit.findOneAndUpdate(
    //         {_id: id},
    //         {$push: {units: unitId}},
    //     );
    // };
    //
    // const deleteUnit = (id, unitId) => {
    //     return MilitaryUnit.destroy(
    //         {_id: id},
    //         {$pull: {units: unitId}},
    //     );
    // };
    //
    // const findAll = () => {
    //     return MilitaryUnit.findAll({});
    // };
    //
    // const findAllByLocation = (location) => {
    //     return MilitaryUnit.findAll({where: {location: location}});
    // };
    //
    // const findById = (id) => {
    //     return MilitaryUnit.findOne({_id: id});
    // };

    return Object.freeze({
        create,
        update,
        deleteMilitaryUnit,
        // findAll,
        // findAllByLocation,
        // findById,
        // addUnit,
        // deleteUnit,
    });
};