const express = require('express')
const router = express.Router();
const Idee = require('../models/idee')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateProjet , GetAllProjets } = require('../controllers/projetsController')

router.post('/projet/create'  , CreateProjet)
router.get('/projet/getall' , GetAllProjets)



module.exports = router;