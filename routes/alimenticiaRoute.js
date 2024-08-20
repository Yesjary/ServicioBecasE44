const express = require('express');
const router = express.Router();
const alimenticiaController = require('../controllers/alimenticiaController');

// Ruta para crear una nueva solicitud de beca alimenticia
router.post('/', alimenticiaController.crearSolicitud);
// Ruta para obtener todas las solicitudes de beca alimenticia
router.get('/', alimenticiaController.obtenerSolicitudes);
// Ruta para actualizar una solicitud de beca alimenticia por ID
router.put('/:id', alimenticiaController.actualizarSolicitud);
// Ruta para obtener una solicitud específica de beca alimenticia por ID
router.get('/:id', alimenticiaController.obtenerSolicitud);
// Ruta para eliminar una solicitud de beca alimenticia por ID
router.delete('/:id', alimenticiaController.eliminarSolicitud);
module.exports = router;