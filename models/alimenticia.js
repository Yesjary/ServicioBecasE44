const mongoose = require('mongoose');

const AlimenticiaSchema = mongoose.Schema({
    curp: {
        type: String,
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
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    carrera: {
        type: String,
        enum: ['Biomedica', 'Biotecnologia', 'Financiera', 'Mecanica Automotriz', 'Mecatronica', 'Software', 'Terapia Física', 'Médico Cirujano', 'Sistemas y Tecnologías Industriales'],
        required: true // Asegura que el campo sea obligatorio
    },
    cuatrimestre: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        required: true // Asegura que el campo sea obligatorio
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Femenino'],
        required: true // Asegura que el campo sea obligatorio
    },
    correo: {
        type: String,
        unique: true,
        required: true,
        trim: true     
    }
});

module.exports = mongoose.model('Alimenticia', AlimenticiaSchema);
