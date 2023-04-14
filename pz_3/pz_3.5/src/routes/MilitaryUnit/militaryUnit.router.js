const router = require("express").Router();
const {
    getMilitaryUnits,
    getMilitaryUnitCreate,
    postMilitaryUnitCreate,
    getMilitaryUnitById,
    getMilitaryUnitsByLocation,
    getUnitCreateInMilitaryUnit,
    postUnitCreateInMilitaryUnit,
    getMilitaryUnitEdit,
    postMilitaryUnitEdit,
    deleteMilitaryUnit,
} = require("../../controllers/MilitaryUnit/militaryUnit.controller");

router.get('/', getMilitaryUnits);

router.route('/create')
    .get(getMilitaryUnitCreate)
    .post(postMilitaryUnitCreate);

router.route("/:id/edit")
    .get(getMilitaryUnitEdit)
    .post(postMilitaryUnitEdit);

router.delete("/:id/delete", deleteMilitaryUnit);

router.get('/:id', getMilitaryUnitById);
router.get('/:location', getMilitaryUnitsByLocation);

router.route('/:id/units/create')
    .get(getUnitCreateInMilitaryUnit)
    .post(postUnitCreateInMilitaryUnit);

module.exports = router;