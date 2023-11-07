const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/createUser',authMiddleware,UserController.createUser)



module.exports = router