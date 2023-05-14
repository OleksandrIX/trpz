module.exports = (Serviceman) => {
    const create = ({id, last_name, first_name, middle_name, rank, position, birth_date, unit_id}) => {
        return Serviceman.create({
            id,
            last_name,
            first_name,
            middle_name,
            birth_date,
            rank,
            position,
            unit_id,
        });
    };

    const update = (id, {last_name, first_name, middle_name, rank, position, birth_date}) => {
        return Serviceman.update(
            {
                last_name: last_name,
                first_name: first_name,
                middle_name: middle_name,
                birth_date: birth_date,
                rank: rank,
                position: position,
            },
            {where: {id: id}},
        );
    };

    const deleteServiceman = (id) => {
        return Serviceman.destroy({where: {id: id}});
    };

    // const findAll = () => {
    //     return Serviceman.find({});
    // };
    //
    // const findById = (id) => {
    //     return Serviceman.findOne({_id: id});
    // };
    //
    // const findAllById = async (IDs) => {
    //     const servicemans = [];
    //     for (const id of IDs) {
    //         const serviceman = await findById(id);
    //         servicemans.push(serviceman);
    //     }
    //     return servicemans;
    // };

    return Object.freeze({
        create,
        update,
        deleteServiceman,
        // findAll,
        // findById,
        // findAllById,
    });
};