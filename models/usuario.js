const mongoose = require('mongoose');
const UsuarioSchema = mongoose.Schema({
    /*id:{
        type: Number,
        require: true,
        unique: true,
        trim: true
    },*/
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
    password:{
        type: String,
        require: true,
        trim: true
    },
    rol:{
        type: String,
        enum: ['Administrador', 'Lector']
    },
    latsLogin:{
        type: Date,
        default: null
    }
},{
    timestamps: true
});

module.exports = mongoose.model('usuario', UsuarioSchema)