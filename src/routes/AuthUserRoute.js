const express = require('express')
const router = express.Router()
const AuthUserController = require('../controllers/authController')

router.post('/login',AuthUserController.loginUser)

router.post('/register',AuthUserController.registerUser)



module.exports = router