const User = require('../models/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
const expireIn = 24 * 60 * 60;
// const expireIn = 10;
/*exports.createUser = async (req, res) => {
    try {
        const newUser = {
            matricula: req.body.matricula,
            password: bcrypt.hashSync(req.body.password)
        }
        const user = await User.create(newUser);
        const expireIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expireIn });
        const dataUser = {
            nombre: user.nombre,
            correo: user.correo,
            accessToken: accessToken,
            expireIn: expireIn
        }
        res.send(dataUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}*/

exports.loginUser = async (req, res) => {
    try {
        const userData = {
            matricula: req.body.matricula,
            password: req.body.password,
        }
        const user = await User.findOne({ matricula: userData.matricula });
        // console.log(user);
        if (!user) {
            return res.status(409).send({ msg: '1: Algo salió mal' });
        }
        const resultPassword = bcrypt.compareSync(userData.password, user.password);
        if (resultPassword) {
            //const expireIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expireIn });
            const dataUser = {
                matricula: user.matricula,
                nombre: user.nombre,
                accessToken: accessToken,
                expireIn: expireIn
            }
            res.status(200).json(dataUser);
            console.log(dataUser);
        } else {
            res.status(409).send({ msg: '2: Algo salió mal' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.validateToken = async (req, res, next) => {
    try{
    const accessToken = req.headers['authorization'];
    if(!accessToken){
        res.status(400).send('Access denied');
    }else{
        jwt.verify(accessToken, SECRET_KEY, (err, user)=>{
            if(err){
                res.status(400).send('Access denied, token expire or incorrect');
            }
            else{
                next();
            }
        });
    }
    }catch(error){
        console.log(error);
    }
}

exports.refreshToken = async (req, res) => {
    try{
        const token = req.headers['authorization'];
        const lastToken = jwt.decode(token);
        console.log(lastToken.id);
        if(lastToken.id){
            //const expireIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: lastToken.id }, SECRET_KEY, { expiresIn: expireIn });
            const tokenUser={
                refreshToken: accessToken
            }
            res.status(200).json(tokenUser);
        }else{
            res.status(409).send({ msg: 'Algo salió mal' });
        }
    }catch(error){
        console.log(error);
    }
}
