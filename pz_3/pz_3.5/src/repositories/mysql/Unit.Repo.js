module.exports = (Unit) => {
    const create = ({id, name, parent = null, military_unit_id}) => {
        return Unit.create({id, name, parent, military_unit_id});
    };

    const update = (id, {name}) => {
        return Unit.update(
            {name: name},
            {where: {_id: id}},
        );
    };

    const deleteUnit = (id) => {
        return Unit.destroy({where: {_id: id}});
    };

    // const findAll = () => {
    //     return Unit.find({});
    // };
    //
    // const findById = (id) => {
    //     return Unit.findOne({_id: id});
    // };
    //
    // const findAllById = async (IDs) => {
    //     const units = [];
    //     for (const id of IDs) {
    //         const unit = await findById(id);
    //         units.push(unit);
    //     }
    //     return units;
    // };
    //
    // const addUnit = (id, unitId) => {
    //     return Unit.findOneAndUpdate(
    //         {_id: id},
    //         {$push: {children: unitId}},
    //     );
    // };
    //
    // const addServiceman = (id, servicemanId) => {
    //     return Unit.findOneAndUpdate(
    //         {_id: id},
    //         {$push: {servicemans: servicemanId}},
    //     );
    // };
    //
    // const deleteChildUnit = (id, unitId) => {
    //     return Unit.findOneAndUpdate(
    //         {_id: id},
    //         {$pull: {children: unitId}},
    //     );
    // };
    //
    // const deleteServiceman = (id, servicemanId) => {
    //     return Unit.findOneAndUpdate(
    //         {_id: id},
    //         {$pull: {servicemans: servicemanId}},
    //     );
    // };

    return Object.freeze({
        create,
        update,
        deleteUnit,
        // findAll,
        // findById,
        // addServiceman,
        // addUnit,
        // deleteChildUnit,
        // deleteServiceman,
        // findAllById,
    });
};