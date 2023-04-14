module.exports = ({ServicemanService}) => {
    const createServiceman = async (servicemanData) => {
        try {
            const serviceman = await ServicemanService.createServiceman(servicemanData);
            console.log('Serviceman added successfully.');
            return serviceman;
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when adding serviceman.');
        }
    };

    const updateServiceman = async (id, servicemanData) => {
        try {
            return ServicemanService.updateServiceman(id, servicemanData);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when updating serviceman.');
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

    const deleteServiceman = async (id)=>{
        try {
            return ServicemanService.deleteServiceman(id);
        } catch (error) {
            console.log('Error: ', error.message);
            throw new Error('Error when deleting serviceman.');
        }
    };

    return Object.freeze({
        createServiceman,
        updateServiceman,
        findAllServicemans,
        findServicemanById,
        deleteServiceman,
    });
};