const express = require('express')
const router = express.Router();

const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateProjet , GetAllProjets , GetProjetById , getProjetByUser } = require('../controllers/projetsController')

router.post('/projet/create'  , CreateProjet)
router.get('/projet/getall' , GetAllProjets)
router.get('/projet/get/:projetId', GetProjetById )
router.get('/projet/user/:userId' , getProjetByUser)

module.exports = router;