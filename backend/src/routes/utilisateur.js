const express = require('express')
const router = express.Router();
//const Idee = require('../models/idee')
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { GetAllUsers , deleteUser } = require('../controllers/usersController')


router.get('/utilisateur/getall' , GetAllUsers)
router.get('/utilisateur/delete/:userId' , deleteUser )


module.exports = router;