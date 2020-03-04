const express = require('express');
const router = express.Router();
const { Carrito } = require("../models/index")


router.post("/add", (req, res) => {
    console.log("**************", req.body.idUsuario);

    Carrito.create({
        cantidad: req.body.cantidad
    })
        .then(carrito => carrito.setProducto(req.body.idProducto.id))
        .then(carrito => carrito.setUsuario(req.body.idUsuario.id))
        .then(carrito => res.send(carrito))
})

module.exports = router