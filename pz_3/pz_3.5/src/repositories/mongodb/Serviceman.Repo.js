module.exports = (Serviceman, Id) => {
    const create = ({last_name, first_name, middle_name, rank, position, birth_date}) => {
        return Serviceman.create({_id: new Id(), last_name, first_name, middle_name, rank, position, birth_date});
    };

    const findAll = () => {
        return Serviceman.find({});
    };

    const findById = (id) => {
        return Serviceman.findOne({_id: id});
    };

    return Object.freeze({
        create,
        findAll,
        findById,
    });
};