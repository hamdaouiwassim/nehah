const express = require('express')
const { signup, signin , signout} = require('../../controllers/admin/auth')
const { validateSigninRequest , validateSignupRequest , isRequestValidated } = require("../../validators/auth")
const router = express.Router()
const { requireSignIn } = require('../../common-middleware');

router.post('/admin/signin', validateSigninRequest , isRequestValidated , signin)
router.post('/admin/signup', validateSignupRequest , isRequestValidated , signup)
router.post('/admin/signout', requireSignIn , signout )
/* router.post('/profile',requireSignIn,(req,res)=>{
    return res.status(200).json({ message : 'profile'})

}) */

module.exports = router;