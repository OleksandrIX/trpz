module.exports = (Unit, Id) => {
    const create = ({name, parent = null}) => {
        return Unit.create({_id: new Id(), name, parent});
    };

    const findAll = () => {
        return Unit.find({});
    };

    const findById = (id) => {
        return Unit.findOne({_id: id});
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

    return Object.freeze({
        create,
        findAll,
        findById,
        addServiceman,
        addUnit,
    });
};