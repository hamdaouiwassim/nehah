const express = require('express')
const router = express.Router();
const Idee = require('../models/idee')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateIdee , GetAllIdees } = require('../controllers/idee')

router.post('/idee/create'  , CreateIdee)
router.get('/idee/getall' , GetAllIdees)



module.exports = router;