const router = require("express").Router();
router.all('/', (request, response) => {
    response.status(301).redirect('/military-units');
});

const militaryUnitRouter = require("./MilitaryUnit/militaryUnit.router");
router.use('/military-units', militaryUnitRouter);

const unitRouter = require("./Unit/unit.router");
router.use('/military-units/:id/units', unitRouter);

const errorRouter = require("./error/error.router");
router.use(errorRouter);

module.exports = router;