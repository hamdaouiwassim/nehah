const express = require('express')
const { signup, signin} = require('../../controllers/admin/auth')
const { validateSigninRequest , validateSignupRequest , isRequestValidated } = require("../../validators/auth")
const router = express.Router()
const User = require('../../models/user')

router.post('/admin/signin', validateSigninRequest , isRequestValidated , signin)
router.post('/admin/signup', validateSignupRequest , isRequestValidated , signup)

/* router.post('/profile',requireSignIn,(req,res)=>{
    return res.status(200).json({ message : 'profile'})

}) */

module.exports = router;