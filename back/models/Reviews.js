const S = require('sequelize')
const db = require("../db/db")
class Review extends S.Model { }

Review.init({
    comentario: {
        type: S.TEXT,
        allowNull: false


    },
    valoracion: {

        type: S.FLOAT


    },






}, { sequelize: db, modelName: 'review' })



module.exports = Review;