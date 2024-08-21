const User = require('../models/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//const nodemailer = require('nodemailer');
const SECRET_KEY = 'secretkey123456';
const expireIn = 24 * 60 * 60;

exports.loginUser = async (req, res) => {
    try {
        const userData = {
            matricula: req.body.matricula,
            password: req.body.password,
        }
        const user = await User.findOne({ matricula: userData.matricula });
        if (!user) {
            return res.status(409).send({ msg: '1: Algo salió mal' });
        }
        const resultPassword = bcrypt.compareSync(userData.password, user.password);
        if (resultPassword) {
            const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expireIn });
            const dataUser = {
                matricula: user.matricula,
                nombre: user.nombre,
                accessToken: accessToken,
                expireIn: expireIn
            }
            res.status(200).json(dataUser);
        } else {
            res.status(409).send({ msg: '2: Algo salió mal' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.validateToken = async (req, res, next) => {
    try {
        const accessToken = req.headers['authorization'];
        if (!accessToken) {
            return res.status(400).send('Access denied');
        } else {
            jwt.verify(accessToken, SECRET_KEY, (err, user) => {
                if (err) {
                    return res.status(400).send('Access denied, token expired or incorrect');
                }
                next();
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.refreshToken = async (req, res) => {
    try {
        const token = req.headers['authorization'];
        const lastToken = jwt.decode(token);
        if (lastToken && lastToken.id) {
            const accessToken = jwt.sign({ id: lastToken.id }, SECRET_KEY, { expiresIn: expireIn });
            res.status(200).json({ refreshToken: accessToken });
        } else {
            res.status(409).send({ msg: 'Algo salió mal' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}


exports.recoverPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ correo: email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        console.log(`Enviando correo a ${email}`);


        res.status(200).json({ message: 'Correo de recuperación' });

    } catch (error) {
        console.error('Error en la recuperación de contraseña:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};