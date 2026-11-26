const express = require('express');
const conectarDB = require('./config/database');
const rutasEnvios = require('./routes/envios');

const app = express();

// Permitir recibir datos JSON
app.use(express.json());

// Conectar a MongoDB
conectarDB();

// Rutas de envíos
app.use('/api/envios', rutasEnvios);

// Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor FastShip ejecutándose en el puerto ${PORT}`);
});