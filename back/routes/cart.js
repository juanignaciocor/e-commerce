const express = require('express');
const router = express.Router();
const { Carrito, Producto, Usuario } = require("../models/index")


router.post("/add", (req, res) => {

    Carrito.create({
        cantidad: req.body.cantidad
    })
        .then(carrito => (
            carrito.setProducto(req.body.idProducto)))
        .then(carrito => (
            carrito.setUsuario(req.body.idUsuario.id)))
        .then(carrito => (res.send(carrito)))
})
router.get("/userCart/:usuario", (req, res) => {
    Carrito.findAll({
        include: [{
            model: Usuario,
            where: { id: req.params.usuario }
        },
        {
            model: Producto,
        }]
    })
        .then((data) => {
            res.json(data)
        })


})


router.delete("/removeCart/:usuario/:producto", (req, res, next) => {

    Carrito.destroy({
        where: {
            usuarioId: req.params.usuario,
            productoId: req.params.producto
        }
    })
        .then((data) => res.json(data))
        .catch(next)


})




module.exports = router