const router = require("express").Router();
const {
    getServicemanCreate,
    postServicemanCreate,
    getServicemanEdit,
    deleteServiceman,
} = require("../../controllers/Serviceman/serviceman.controller");

router.route('/create')
    .get(getServicemanCreate)
    .post(postServicemanCreate);

router.get('/:id/edit', getServicemanEdit);
router.delete('/:id/delete', deleteServiceman);

module.exports = router;