const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
exports.crearUsuario = async (req, res)=>{
    try{
        /*let usuario;
        usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario);*/
        console.log(req.body)
        const usuario ={
            matricula: req.body.matricula,
            nombre: req.body.nombre,
            apellidoP: req.body.apellidoP,
            apellidoM: req.body.apellidoM,
            correo: req.body.correo,
            password: bcrypt.hashSync(req.body.password),
            rol: req.body.rol
        }
        await Usuario.create(usuario);
        res.status(201).json(usuario);
        console.log(usuario);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuarios = async (req, res)=>{
    try{
        const usuario = await Usuario.find({}, 'matricula nombre apellidoP apellidoM correo rol');
        res.json(usuario);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarUsuario = async (req, res)=>{
    try{
        const {matricula, correo, password} = req.body;
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' });
        }
        usuario.matricula = matricula;
        usuario.correo = correo;
        usuario.password = bcrypt.hashSync(password);
        usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, { new: true});
        res.json(usuario);
        console.log(usuario);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuario = async (req, res)=>{
    try{
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' });
        }
        res.json(usuario);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarUsuario = async (req, res)=>{
    try{
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' });
        }
        await Usuario.findOneAndDelete({_id: req.params.id})
        res.json({ msg: 'Se elimino el usuario con exito'});
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error'); 
    }
}