const Envio = require('../models/Envio');

// Registrar un nuevo envío
const registrarEnvio = async (req, res) => {
    try {
        const nuevoEnvio = new Envio(req.body);
        await nuevoEnvio.save();

        res.status(201).json({
            mensaje: 'Envío registrado correctamente',
            envio: nuevoEnvio
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al registrar el envío',
            error: error.message
        });
    }
};

// Consultar todos los envíos activos
const consultarEnviosActivos = async (req, res) => {
    try {
        const envios = await Envio.find({
            estado: { $ne: 'entregado' }
        });

        res.status(200).json(envios);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al consultar los envíos',
            error: error.message
        });
    }
};

// Buscar un envío por ID del pedido
const buscarEnvioPorId = async (req, res) => {
    try {
        const envio = await Envio.findOne({
            idPedido: req.params.id
        });

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json(envio);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al buscar el envío',
            error: error.message
        });
    }
};

// Actualizar el estado del envío
const actualizarEstadoEnvio = async (req, res) => {
    try {
        const envio = await Envio.findOneAndUpdate(
            { idPedido: req.params.id },
            { estado: req.body.estado },
            { new: true, runValidators: true }
        );

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Estado actualizado correctamente',
            envio
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar el estado',
            error: error.message
        });
    }
};

// Eliminar un envío
const eliminarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findOneAndDelete({
            idPedido: req.params.id
        });

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Envío eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al eliminar el envío',
            error: error.message
        });
    }
};

module.exports = {
    registrarEnvio,
    consultarEnviosActivos,
    buscarEnvioPorId,
    actualizarEstadoEnvio,
    eliminarEnvio
};