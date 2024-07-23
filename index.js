const express = require('express');
const conectarDB = require('./config/db');
const app = express();
const cors = require('cors');
const { validateToken } = require('./controllers/authController');
const PORT = 4000;

conectarDB();
app.use(cors())
app.use(express.json());
app.use('/api',require('./routes/authRoute'));
app.use('/api/usuarios', validateToken ,require('./routes/usuariosRoute'));

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
})