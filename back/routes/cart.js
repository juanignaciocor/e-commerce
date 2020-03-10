const express = require('express');
const router = express.Router();
const { Carrito, Producto, Usuario, Compra } = require("../models/index")

router.put("/recoverStock", (req, res, next) => {
    const cantidad = parseInt(req.body.cantidad)
    Producto.findByPk(req.body.idProducto)
        .then((producto) => { Producto.update({ stock: producto.stock + cantidad }, { where: { id: req.body.idProducto } }) })
        .then((data) => { res.json(data) })

})

router.put("/stock", (req, res, next) => {
    Producto.findByPk(req.body.idProducto)
        .then((producto) => { Producto.update({ stock: producto.stock - req.body.cantidad }, { where: { id: req.body.idProducto } }) })
        .then((data) => { res.json(data) })

})
router.post("/buy", (req, res, next) => {
    const tarjetaCredito = parseInt(req.body.creditCard)
    const totalPrecio = parseInt(req.body.total)

    Compra.create({
        numeroTarjeta: tarjetaCredito,
        total: totalPrecio,
        usuarioId: req.body.userId,
        dueñoTarjeta: req.body.dueñoTarjeta,
        direccionEntrega: req.body.direccion
    })
        .then((compra) => {
            Carrito.update({ compraId: compra.id, estado: "fulfilled", opinion: false }, { where: { usuarioId: req.body.userId, estado: "pending" } })
                .then((data) => {
                    res.json(data)
                })


        })

})
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
        },
        ], where: { estado: "pending" }
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