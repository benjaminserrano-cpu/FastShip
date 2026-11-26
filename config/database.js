const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://benjaminserrano_db_user:Ben1991@cluster0.ucxnjqg.mongodb.net/');

        console.log('MongoDB conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;