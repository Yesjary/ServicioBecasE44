const express = require('express');
const router = express.Router();
const becasExternasController = require('../controllers/becasExternasController');

// Definir las rutas para el CRUD de becas externas
router.post('/becas-externas', becasExternasController.crearBeca);
router.get('/becas-externas', becasExternasController.obtenerBecas);
router.get('/becas-externas/:id', becasExternasController.obtenerBecaPorId);
router.put('/becas-externas/:id', becasExternasController.actualizarBeca);
router.delete('/becas-externas/:id', becasExternasController.eliminarBeca);

module.exports = router;
