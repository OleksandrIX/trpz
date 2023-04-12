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

    const findAllServicemansById = async (IDs) => {
        const servicemans = [];
        for (const id of IDs) {
            const serviceman = await ServicemanRepo.findById(id);
            servicemans.push(serviceman);
        }
        return servicemans;
    };

    return Object.freeze({
        createServiceman,
        findAllServicemans,
        findServicemanById,
        findAllServicemansById,
    });
};