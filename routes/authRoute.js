const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 

//router.post('/auth', authController.createUser);
router.post('/', authController.loginUser);
router.get('/refresh-token', authController.refreshToken);

module.exports = router;