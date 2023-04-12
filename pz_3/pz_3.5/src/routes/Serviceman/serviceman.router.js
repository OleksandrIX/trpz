const router = require("express").Router();
const {
    getServicemanCreate,
    postServicemanCreate,
} = require("../../controllers/Serviceman/serviceman.controller");

router.route('/create')
    .get(getServicemanCreate)
    .post(postServicemanCreate);

module.exports = router;