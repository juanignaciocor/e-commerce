const S = require('sequelize')
const db = require("../db/db")
class Carrito extends S.Model { }

Carrito.init({
    cantidad: {
        type: S.INTEGER,
        defaultValue: 0
    },
    estado: {
        type: S.STRING,
        defaultValue: "pending"
    },
    cambiarBoton: {
        type: S.BOOLEAN,
        defaultValue: false
    },
    opinion: {
        type: S.BOOLEAN,

    }

}, { sequelize: db, modelName: 'carrito' })



module.exports = Carrito;