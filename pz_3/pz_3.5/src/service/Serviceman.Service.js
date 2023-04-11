module.exports = (MongoService) => {
    const createServiceman = async (servicemanData) => {
        try {
            const serviceman = await MongoService.createServiceman(servicemanData);
            console.log('Unit added successfully.');
            return serviceman;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding unit.');
        }
    };

    const findAllServicemans = async () => {
        try {
            return MongoService.findAllServicemans();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search servicemans.');
        }
    };

    const findServicemanById = async (id) => {
        try {
            return MongoService.findServicemanById(id)
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search serviceman.');
        }
    };

    return Object.freeze({
        createServiceman,
        findAllServicemans,
        findServicemanById
    });
};