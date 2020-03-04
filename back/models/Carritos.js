const S = require('sequelize')
const db = require("../db/db")
class Carrito extends S.Model { }

Carrito.init({
    cantidad: {
        type: S.INTEGER
    },
    estado: {
        type: S.STRING,
        defaultValue: "pending"
    },

}, { sequelize: db, modelName: 'carrito' })



module.exports = Carrito;