const S = require('sequelize')
const db = require("../db/db")
class Compra extends S.Model { }

Compra.init({
    numeroTarjeta: {
        type: S.INTEGER,
        unique: true,
        allowNull: false


    },
    total: {

        type: S.INTEGER


    },






}, { sequelize: db, modelName: 'compra' })



module.exports = Compra;