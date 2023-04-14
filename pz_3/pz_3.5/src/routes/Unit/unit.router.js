const router = require("express").Router();
const {
    getUnit,
    getUnitCreate,
    postUnitCreate,
    getUnitEdit,
    postUnitEdit,
    deleteUnit,
} = require("../../controllers/Unit/unit.controller");

router.get("/:id", getUnit);

router.route("/:id/units/create")
    .get(getUnitCreate)
    .post(postUnitCreate);

router.route("/:id/edit")
    .get(getUnitEdit)
    .post(postUnitEdit);

router.delete("/:id/delete", deleteUnit);

module.exports = router;