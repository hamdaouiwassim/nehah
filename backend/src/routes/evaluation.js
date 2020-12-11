const express = require('express')
const router = express.Router();
const Evaluation = require('../models/evaluation')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { CreateEvaluation , GetAllEvaluations  , DeleteEvaluation , GetEvaluationByIdProjet  } = require('../controllers/evaluationsController')

router.post('/evaluation/create'  , CreateEvaluation)
router.get('/evaluation/getall' , GetAllEvaluations)
// router.get('/evaluation/get/:evaluationId' , GetEvaluationById)
router.get('/projet/evaluation/get/:projetId' , GetEvaluationByIdProjet)
router.get('/evaluation/delete/:evaluationId' , DeleteEvaluation)




module.exports = router;