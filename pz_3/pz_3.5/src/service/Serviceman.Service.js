module.exports = ({ServicemanService}) => {
    const createServiceman = async (servicemanData) => {
        try {
            const serviceman = await ServicemanService.createServiceman(servicemanData);
            console.log('Unit added successfully.');
            return serviceman;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding unit.');
        }
    };

    const findAllServicemans = async () => {
        try {
            return ServicemanService.findAllServicemans();
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when search servicemans.');
        }
    };

    const findServicemanById = async (id) => {
        try {
            return ServicemanService.findServicemanById(id)
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