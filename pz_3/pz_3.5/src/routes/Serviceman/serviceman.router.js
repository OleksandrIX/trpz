const router = require("express").Router();
const {
    getServicemanCreate,
    postServicemanCreate,
    getServicemanEdit,
    postServicemanEdit,
    deleteServiceman,
} = require("../../controllers/Serviceman/serviceman.controller");

router.route('/create')
    .get(getServicemanCreate)
    .post(postServicemanCreate);

router.route('/:id/edit')
    .get(getServicemanEdit)
    .post(postServicemanEdit);

router.delete('/:id/delete', deleteServiceman);

module.exports = router;