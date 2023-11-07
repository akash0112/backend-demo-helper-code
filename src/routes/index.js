const express = require('express').Router();
const router = express.Router();
const userRoutes = require('./UserRoute'); 
const authUserRoutes = require('./AuthUserRoute'); 

router.use('/users', userRoutes);
router.use('/', authUserRoutes);

module.exports = router;
