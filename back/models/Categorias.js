const S = require('sequelize')
const db = require("../db/db")
class Categoria extends S.Model { }

Categoria.init({
    nombre: {
        type: S.STRING,
        allowNull: false,
        unique: true
    }


}, { sequelize: db, modelName: 'categoria' })
module.exports = Categoria;