module.exports = (Serviceman, Id) => {
    const create = ({last_name, first_name, middle_name, rank, position, birth_date, unit}) => {
        return Serviceman.create({
            _id: new Id(),
            last_name,
            first_name,
            middle_name,
            birth_date,
            rank,
            position,
            unit,
        });
    };

    const findAll = () => {
        return Serviceman.find({});
    };

    const findById = (id) => {
        return Serviceman.findOne({_id: id});
    };

    const findAllById = async (IDs) => {
        const servicemans = [];
        for (const id of IDs) {
            const serviceman = await findById(id);
            servicemans.push(serviceman);
        }
        return servicemans;
    };

    const deleteServiceman = (id)=>{
        return Serviceman.deleteOne({_id: id});
    };

    return Object.freeze({
        create,
        findAll,
        findById,
        deleteServiceman,
        findAllById,
    });
};