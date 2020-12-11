const express = require('express')
const router = express.Router();
const Idee = require('../models/idee')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateIdee , GetAllIdees , validateIdeeByAdmin , DeleteIdee , getIdeaById } = require('../controllers/ideesController')

router.post('/idee/create'  , CreateIdee)
router.get('/idee/getall' , GetAllIdees)
router.get('/idee/validate/:ideeId' , validateIdeeByAdmin)
router.get('/idee/delete/:ideeId' , DeleteIdee)
router.get('/idee/:ideeId' , getIdeaById)




module.exports = router;