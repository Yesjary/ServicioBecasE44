const BecasExternas = require('../models/BecasExternas');

// Crear una nueva beca externa
exports.crearBeca = async (req, res) => {
    try {
        const nuevaBeca = new BecasExternas(req.body);
        await nuevaBeca.save();
        res.status(201).json(nuevaBeca);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todas las becas externas
exports.obtenerBecas = async (req, res) => {
    try {
        const becas = await BecasExternas.find();
        res.status(200).json(becas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener una beca externa por ID
exports.obtenerBecaPorId = async (req, res) => {
    try {
        const beca = await BecasExternas.findById(req.params.id);
        if (beca) {
            res.status(200).json(beca);
        } else {
            res.status(404).json({ message: 'Beca no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una beca externa
exports.actualizarBeca = async (req, res) => {
    try {
        const becaActualizada = await BecasExternas.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(becaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una beca externa
exports.eliminarBeca = async (req, res) => {
    try {
        await BecasExternas.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Beca eliminada' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
