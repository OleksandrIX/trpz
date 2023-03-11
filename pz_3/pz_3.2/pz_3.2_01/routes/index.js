const express = require('express');
const {indexController, addClientToJSON} = require("../controllers/indexController");
const router = express.Router();

router.get('/', indexController);
router.post('/clients', addClientToJSON);

module.exports = router;