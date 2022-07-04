const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Dino = new Schema({
    nombre: {
        type: String
    },
    tipo: {
        type: String
    },
    genero: {
        type: String
    },
    tamanio: {
        type: Number
    },
    peso: {
        type: Number
    },
},{
    collection: 'dinosDB'
})

module.exports = mongoose.model('Dino', Dino)