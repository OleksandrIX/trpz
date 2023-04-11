const router = require("express").Router();
const {notFoundHandler} = require("../../controllers/error/error.controller");

router.use(notFoundHandler);

module.exports = router;