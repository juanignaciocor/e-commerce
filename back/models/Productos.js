const S = require('sequelize')
const db = require("../db/db")
class Producto extends S.Model { }

Producto.init({
    nombre: {
        type: S.STRING,
        allowNull: false,

    },
    descripcion: {

        type: S.TEXT


    },
    precio: {


        type: S.FLOAT

    },
    imagen: {

        type: S.STRING


    },
    typo: {
        type: S.STRING


    },
    cepa: {

        type: S.STRING

    },
    stock: {

        type: S.INTEGER



    },
    bodega: {

        type: S.STRING

    },
    provincia: {

        type: S.STRING
    },
    alchool: {
        type: S.FLOAT


    }






}, { sequelize: db, modelName: 'producto' })



module.exports = Producto;