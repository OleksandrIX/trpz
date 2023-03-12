const express = require('express');
const {getAllTests, saveUserInLocalStorage, resultExam} = require('../controllers/exam');
const {saveUserInDB} = require('../models/users');
const router = express.Router();

const saveUser = (req,res,next) => {
    const {name, surname, ...questions} = req.body;
    saveUserInDB(name, surname, questions).then(res=>console.log(res)).catch(e=>console.log(e));
    next();
}

router.use('/result', saveUser)

router.get('/', getAllTests);
router.post('/', saveUserInLocalStorage)
router.post('/result', resultExam)

module.exports = router;