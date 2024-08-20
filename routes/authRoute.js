const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 

//router.post('/auth', authController.createUser);
router.post('/', authController.loginUser);
router.get('/refresh-token', authController.refreshToken);

// Ruta de recuperación de contraseña
router.post('/recover-password', authController.recoverPassword); // Nueva ruta de recuperación de contraseña

module.exports = router;