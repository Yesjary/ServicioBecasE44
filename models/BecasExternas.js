const mongoose = require('mongoose');

const BecasExternasSchema = mongoose.Schema({
    Folio: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    matricula: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellidoP: {
        type: String,
        required: true,
        trim: true
    },
    apellidoM: {
        type: String,
        required: true,
        trim: true
    },
    curp: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
        trim: true
    },
    programaE: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    inicio: {
        type: Date,
        required: true
    },
    termino: {
        type: Date,
        required: true
    },
    requisitos: {
        solicitud: {
            type: String,
            required: true,
            trim: true
        },
        constancia: {
            type: String,
            required: true,
            trim: true
        },
        historial: {
            type: String,
            required: true,
            trim: true
        }
    }
});

module.exports = mongoose.model('BecasExternas', BecasExternasSchema);
