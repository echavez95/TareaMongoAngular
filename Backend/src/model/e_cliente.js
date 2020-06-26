const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: String,
    RTN: String,
    fechaRegistro: Date
});

module.exports = mongoose.model('c_cliente', cliente);