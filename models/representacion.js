const mongoose = require('mongoose');
const RepresentacionSchema = mongoose.Schema({

    Folio:{
        type: Number,
        require: true,
        unique: true,
        trim: true
    },
    matricula:{
        type: Number,
        require: true,
        unique: true,
        trim: true
    },
    nombre:{
        type: String,
        require: true,
        trim: true
    },
    apellidoP:{
        type: String,
        require: true,
        trim: true
    },
    apellidoM:{
        type:String,
        require: true,
        trim: true
    },
    correo:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    cuatrimestre:{
        type: Number,
        require: true,
        trim: true
    },
    evento:{
        type:String,
        require: true,
        trim: true
    },
    monto:{
        type:Number,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('representacion', RepresentacionSchema)
