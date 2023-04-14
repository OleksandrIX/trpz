module.exports = ({ServicemanRepo, UnitRepo}) => {
    const createServiceman = async (servicemanData) => {
        return ServicemanRepo.create(servicemanData);
    };
    const updateServiceman = async (id, servicemanData) => {
        return ServicemanRepo.update(id, servicemanData);
    };

    const findAllServicemans = async () => {
        return ServicemanRepo.findAll();
    };

    const findServicemanById = async (id) => {
        try {
            return ServicemanRepo.findById(id);
        } catch (error) {
            return {status: 404};
        }
    };

    const deleteServiceman = async (id) => {
        const serviceman = await ServicemanRepo.findById(id);
        const unit = serviceman.unit;
        await UnitRepo.deleteServiceman(unit, serviceman._id);
        await ServicemanRepo.deleteServiceman(serviceman._id);
    };

    return Object.freeze({
        createServiceman,
        updateServiceman,
        findAllServicemans,
        findServicemanById,
        deleteServiceman,
    });
};