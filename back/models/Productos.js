const S = require('sequelize')
const db = require("../db/db")
class Producto extends S.Model { }

Producto.init({
    nombre: {
        type: S.STRING,
        allowNull: false,
    },
    descripcion: {
        type: S.TEXT,
        allowNull: false
    },
    precio: {
        type: S.FLOAT,
        allowNull: false
    },
    imagen: {
        type: S.STRING,
        allowNull: false
    },
    tipo: {
        type: S.STRING,
        allowNull: false
    },
    cepa: {
        type: S.STRING,
        allowNull: false
    },
    stock: {
        type: S.INTEGER,
        allowNull: false
    },
    bodega: {
        type: S.STRING,
        allowNull: false
    },
    provincia: {
        type: S.STRING,
        allowNull: false
    },
    alcohol: {
        type: S.FLOAT,
        allowNull: false
    },
    quantity: {
        type: S.INTEGER,
        defaultValue: 0
    },
    input: {
        type: S.INTEGER,
        defaultValue: 0
    }







}, { sequelize: db, modelName: 'producto' })



module.exports = Producto;