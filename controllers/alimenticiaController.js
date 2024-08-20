const Alimenticia = require('../models/alimenticia');

// Crear una nueva solicitud de beca alimenticia
exports.crearSolicitud = async (req, res) => {
    try {
        // Datos del usuario extraídos del cuerpo de la solicitud
        const nuevaSolicitud = {
            curp: req.body.curp,
            matricula: req.body.matricula,
            apellidoP: req.body.apellidoP,
            apellidoM: req.body.apellidoM,
            nombre: req.body.nombre,
            carrera: req.body.carrera,
            cuatrimestre: req.body.cuatrimestre,
            sexo: req.body.sexo,
            telefono: req.body.telefono,
            correo: req.body.correo
        };

        // Crear la nueva solicitud en la base de datos
        const solicitudCreada = await Alimenticia.create(nuevaSolicitud);
        
        // Responder con la solicitud creada
        res.status(201).json(solicitudCreada);
        console.log(solicitudCreada);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtener todas las solicitudes de beca alimenticia
exports.obtenerSolicitudes = async (req, res) => {
    try {
        const solicitudes = await Alimenticia.find({});
        res.json(solicitudes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener las solicitudes');
    }
};

// Actualizar una solicitud de beca alimenticia
exports.actualizarSolicitud = async (req, res) => {
    try {
        let solicitud = await Alimenticia.findById(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ msg: 'No existe la solicitud' });
        }

        solicitud = await Alimenticia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(solicitud);
        console.log(solicitud);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar la solicitud');
    }
};

// Obtener una solicitud de beca alimenticia por su ID
exports.obtenerSolicitud = async (req, res) => {
    try {
        let solicitud = await Alimenticia.findById(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ msg: 'No existe la solicitud' });
        }
        res.json(solicitud);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener la solicitud');
    }
};

// Eliminar una solicitud de beca alimenticia
exports.eliminarSolicitud = async (req, res) => {
    try {
        let solicitud = await Alimenticia.findById(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ msg: 'No existe la solicitud' });
        }

        await Alimenticia.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Solicitud eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar la solicitud');
    }
};
