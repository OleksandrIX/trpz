const router = require("express").Router();
const {
    getMilitaryUnits,
    getMilitaryUnitCreate,
    postMilitaryUnitCreate,
    getMilitaryUnitById,
    getMilitaryUnitsByLocation,
    getUnitCreateInMilitaryUnit,
    postUnitCreateInMilitaryUnit,
} = require("../../controllers/MilitaryUnit/militaryUnit.controller");

router.get('/', getMilitaryUnits);

router.route('/create')
    .get(getMilitaryUnitCreate)
    .post(postMilitaryUnitCreate);

router.get('/:id', getMilitaryUnitById);
router.get('/:location', getMilitaryUnitsByLocation);

router.route('/:id/units/create')
    .get(getUnitCreateInMilitaryUnit)
    .post(postUnitCreateInMilitaryUnit);

module.exports = router;