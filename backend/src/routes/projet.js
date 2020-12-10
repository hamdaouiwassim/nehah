const express = require('express')
const router = express.Router();
const Idee = require('../models/idee')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateProjet , GetAllProjets , GetProjetById } = require('../controllers/projetsController')

router.post('/projet/create'  , CreateProjet)
router.get('/projet/getall' , GetAllProjets)
router.get('/projet/get/:projetId', GetProjetById )


module.exports = router;