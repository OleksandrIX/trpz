module.exports = (Unit, Id) => {
    const create = ({name, parent = null}) => {
        return Unit.create({_id: new Id(), name, parent});
    };

    const update = (id, {name}) => {
        return Unit.updateOne(
            {_id: id},
            {name: name}
        );
    };


    const findAll = () => {
        return Unit.find({});
    };

    const findById = (id) => {
        return Unit.findOne({_id: id});
    };

    const findAllById = async (IDs)=>{
        const units = [];
        for (const id of IDs) {
            const unit = await findById(id);
            units.push(unit);
        }
        return units;
    };

    const addUnit = (id, unitId) => {
        return Unit.findOneAndUpdate(
            {_id: id},
            {$push: {children: unitId}},
        );
    };

    const addServiceman = (id, servicemanId) => {
        return Unit.findOneAndUpdate(
            {_id: id},
            {$push: {servicemans: servicemanId}},
        );
    };

    const deleteUnit = (id)=>{
        return Unit.deleteOne({_id: id});
    };

    const deleteChildUnit = (id, unitId) => {
        return Unit.findOneAndUpdate(
            {_id: id},
            {$pull: {children: unitId}},
        );
    };

    const deleteServiceman = (id, servicemanId) => {
        return Unit.findOneAndUpdate(
            {_id: id},
            {$pull: {servicemans: servicemanId}},
        );
    };

    return Object.freeze({
        create,
        update,
        findAll,
        findById,
        addServiceman,
        addUnit,
        deleteUnit,
        deleteChildUnit,
        deleteServiceman,
        findAllById,
    });
};