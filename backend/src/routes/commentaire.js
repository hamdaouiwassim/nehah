const express = require('express')
const router = express.Router();
//const Idee = require('../models/idee')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { GetAllCommentaires, DeleteCommentaire , CreateCommentaire , GetAllCommentairesByIdee , GetAllCommentairesByProjet } = require('../controllers/commentairesController');


router.get('/commentaire/getall' , GetAllCommentaires)
router.post('/commentaire/create', CreateCommentaire )
router.get('/commentaire/delete/:commentId' , DeleteCommentaire )
router.get('/commentaire/:ideeId' , GetAllCommentairesByIdee )
router.get('/projet/commentaires/:projetId' , GetAllCommentairesByProjet )
router.get('/idee/commentaires/:ideeId' , GetAllCommentairesByIdee )

//router.get('/commentaire/delete/:commentId' ,  )

module.exports = router;