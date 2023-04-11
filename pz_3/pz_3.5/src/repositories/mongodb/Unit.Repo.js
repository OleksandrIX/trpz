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

    return Object.freeze({
        create,
        findAll,
        findById,
    });
};