const mongoose = require('mongoose');
const AlimenticiaSchema = mongoose.Schema({

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
        type: String,
        require: true,
        trim: true
    },
    curp:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    telefono:{
        type: Number,
        require: true,
        trim: true
    },
    programaE:{
        type: String,
        require: true,
        trim: true
    },
    correo:{
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    inicio:{
        type: Date,
        require: true
    },
    termino:{
        type: Date,
        require: true
    },
    requisitos:{
        solicitud:{
            type: String,
            require: true,
            trim: true
        },
        constancia:{
            type: String,
            require: true,
            trim: true
        },
        // socioeconomico:{
            
        // }
        historial:{
            type: String,
            require: true,
            trim: true
        }
    }
});
module.exports = mongoose.model('alimenticia', AlimenticiaSchema)