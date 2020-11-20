const express = require('express')
const router = express.Router();
const Idee = require('../models/idee')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateIdee , GetAllIdees } = require('../controllers/idee')

router.post('/idee/create' , requireSignIn  , CreateIdee)
router.get('/idee/getall' , requireSignIn , GetAllIdees)



module.exports = router;