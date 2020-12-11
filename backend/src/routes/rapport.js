const express = require('express')
const router = express.Router();
const Rapport = require('../models/rapport')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateRapport , GetAllRapports  , DeleteRapport , GetRapportByIdProjet  } = require('../controllers/rapportsController')

router.post('/rapport/create'  , CreateRapport)
router.get('/rapport/getall' , GetAllRapports)
// router.get('/rapport/get/:rapportId' , GetRapportById)
router.get('/projet/rapport/get/:projetId' , GetRapportByIdProjet)
router.get('/rapport/delete/:rapportId' , DeleteRapport)




module.exports = router;