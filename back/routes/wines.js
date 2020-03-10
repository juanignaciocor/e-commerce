const express = require('express');
const router = express.Router();
const { Producto, Review, Compra, Carrito } = require("../models/index")
const { Op } = require("sequelize");




router.get("/reviews/:idProducto/:idUsuario", function (req, res, next) {
    const idProducto = req.params.idProducto
    const idUsuario = req.params.idUsuario
    Carrito.findAll(
        {
            where: {
                usuarioId: idUsuario,
                productoId: idProducto,
                opinion: false
            }
        }
    )
        .then(carrito => {
            res.json(carrito)
        })

})





















router.get("/reviews/:id", function (req, res, next) {
    const id = req.params.id
    Review.findAll(
        {
            where: {
                productoId: id
            }
        }
    )
        .then(reviews => {
            res.json(reviews)
        })

})


router.get("/search/:vino", function (req, res, next) {
    const vino = req.params.vino.toLowerCase()
    const first = vino.substr(1, vino.length)
    const firstLetter = vino.toUpperCase().substr(0, 1)
    const search = firstLetter + first

    Producto.findAll()
        .then(data => {
            if (!data) res.sendStatus(404)
            const winesFilter = data.filter(wine => wine.tipo.includes(search) ||
                wine.nombre.includes(search) ||
                wine.cepa.includes(search) ||
                wine.bodega.includes(search) ||
                wine.provincia.includes(search)
            )
            res.json(winesFilter)
        })
        .catch(err => { throw new Error(err) })
})


router.get("/allWines", function (req, res, next) {
    Producto.findAll()
        .then((data) => {

            res.status(200).json(data)


        })
        .catch(next)

})
router.get("/category/tinto", function (req, res, next) {
    Producto.findAll({ where: { tipo: "Tinto" } })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})
router.get("/category/rosado", function (req, res, next) {
    Producto.findAll({ where: { tipo: "Rosado" } })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})
router.get("/category/blanco", function (req, res, next) {
    Producto.findAll({ where: { tipo: "Blanco" } })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})


router.get("/:id", function (req, res) {
    const id = req.params.id;
    Producto.findAll({
        where: {
            id
        }
    })
        .then((vino) => {
            res.status(200).send(vino)
        })
})



module.exports = router