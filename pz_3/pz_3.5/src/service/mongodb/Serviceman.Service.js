module.exports = (ServicemanRepo) => {
    const createServiceman = async (servicemanData) => {
        return ServicemanRepo.create(servicemanData);
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


    return Object.freeze({
        createServiceman,
        findAllServicemans,
        findServicemanById,
    });
};