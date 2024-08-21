const express = require('express');
const router = express.Router();
const becasExternasController = require('../controllers/becasExternasController');

// Definir las rutas para el CRUD de becas externas
router.post('/', becasExternasController.crearBeca);
router.get('/', becasExternasController.obtenerBecas);
router.get('/:id', becasExternasController.obtenerBecaPorId);
router.put('/:id', becasExternasController.actualizarBeca);
router.delete('/:id', becasExternasController.eliminarBeca);

module.exports = router;
