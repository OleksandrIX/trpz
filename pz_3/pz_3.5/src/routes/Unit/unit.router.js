const router = require("express").Router();
const {
    getUnitCreate,
    postUnitCreate,
} = require("../../controllers/Unit/unit.controller");

router.route('/create')
    .get(getUnitCreate)
    .post(postUnitCreate);

module.exports = router;