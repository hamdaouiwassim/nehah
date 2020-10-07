const express = require('express')
const router = express.Router();
const Idee = require('../models/idee')
const { CreateIdee } = require('../controllers/idee')

router.post('/idee/create' , CreateIdee)



module.exports = router;