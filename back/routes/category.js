const express = require('express');
const router = express.Router();
const { Producto, Review, Compra, Carrito, Categoria } = require("../models/index")
const { Op } = require("sequelize");

const adminUser = function (req, res, next) {
    if (req.user.typoUsuario === "admin" || req.user.typoUsuario === "superAdmin") {
        next()
    } else {
        res.sendStatus(401)
    }
}

router.post("/new", adminUser, (req, res, next) => {
    Categoria.create({ nombre: req.body.nombre })
        .then((data) => { res.json(data) })

})


router.get("/allCategory", (req, res, next) => {
    Categoria.findAll()
        .then((data) => res.json(data))

})

router.get(`/oneCategory/:id`, (req, res, next) => {
    console.log(req.params.id)
    Categoria.findAll({
        include: [
            {
                model: Producto,

            }],
        where: {
            id: req.params.id
        }

    })
        .then((data) => {

            console.log(data, "data")
            res.json(data)
        })
})

module.exports = router
