const express = require('express');
const router = express.Router();

const {
    registrarEnvio,
    consultarEnviosActivos,
    buscarEnvioPorId,
    actualizarEstadoEnvio,
    eliminarEnvio
} = require('../controllers/enviosController');

// Registrar un nuevo envío
router.post('/', registrarEnvio);

// Consultar envíos activos
router.get('/activos', consultarEnviosActivos);

// Buscar un envío por ID
router.get('/:id', buscarEnvioPorId);

// Actualizar el estado de un envío
router.put('/:id', actualizarEstadoEnvio);

// Eliminar un envío
router.delete('/:id', eliminarEnvio);

module.exports = router;