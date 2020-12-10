const express = require('express')
const router = express.Router();
const Presentation = require('../models/presentation')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreatePresentation , GetAllPresentations  , DeletePresentation , GetPresentationByIdProjet  } = require('../controllers/presentationsController')

router.post('/presentation/create'  , CreatePresentation)
router.get('/presentation/getall' , GetAllPresentations)
// router.get('/presentation/get/:presentationId' , GetPresentationById)
router.get('/projet/presentation/get/:projetId' , GetPresentationByIdProjet)
router.get('/presentation/delete/:presentationId' , DeletePresentation)




module.exports = router;