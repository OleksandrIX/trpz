const router = require("express").Router();
const {
    getUnitCreate,
    postUnitCreate,
    getUnitEdit,
    deleteUnit,
} = require("../../controllers/Unit/unit.controller");

router.route('/:id/units/create')
    .get(getUnitCreate)
    .post(postUnitCreate);

router.get("/:id/edit", getUnitEdit);
router.delete("/:id/delete", deleteUnit);

module.exports = router;