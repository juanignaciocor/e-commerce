const express = require('express');
const router = express.Router();
const { Carrito, Producto, Usuario, Compra } = require("../models/index")

router.put("/input", (req, res, next) => {
    const cant = parseInt(req.body.valor)
    Producto.update({ input: cant }, { where: { id: req.body.idProducto } })
        .then((data) => {
            res.json(data)
        })

})
router.put("/sumar", (req, res, next) => {
    const cant = parseInt(req.body.cantidad)

    Producto.findByPk(req.body.idProducto)
        .then((producto) => {
            Producto.update({ quantity: producto.quantity + cant, stock: producto.stock - cant }, { where: { id: req.body.idProducto } })
                .then((data) => {
                    Carrito.findOne({ where: { productoId: req.body.idProducto } })
                        .then((data) => {
                            Carrito.update({ cantidad: data.cantidad + cant, cambiarBoton: true }, { where: { productoId: req.body.idProducto } })

                                .then((data) => { res.json(data) })
                        })

                })

        })

})
router.put("/resta", (req, res, next) => {
    const cant = parseInt(req.body.cantidad)

    Producto.findByPk(req.body.idProducto)
        .then((producto) => {
            Producto.update({ quantity: cant - producto.quantity, stock: producto.stock + cant }, { where: { id: req.body.idProducto } })
                .then((data) => {
                    Carrito.findOne({ where: { productoId: req.body.idProducto } })
                        .then((data) => {
                            Carrito.update({ cantidad: cant - data.cantidad, cambiarBoton: false }, { where: { productoId: req.body.idProducto } })

                                .then((data) => { res.json(data) })
                        })

                })

        })
})

router.post("/buy", (req, res, next) => {
    const tarjetaCredito = parseInt(req.body.creditCard)
    const totalPrecio = parseInt(req.body.total)

    Compra.create({
        numeroTarjeta: tarjetaCredito,
        total: totalPrecio,
        usuarioId: req.body.userId,
        dueñoTarjeta: req.body.dueñoTarjeta,
        direccionEntrega: req.body.direccion,
        correoElectronico: req.body.correo
    })
        .then((compra) => {
            Carrito.update({ compraId: compra.id, estado: "fulfilled" }, { where: { usuarioId: req.body.userId, estado: "pending" } })
                .then((data) => {
                    res.json(data)
                })


        })

})
router.post("/add", (req, res) => {

    Carrito.create({
        cantidad: 0
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
        ], where: { estado: "pending" },
        order: [
            ['id', 'DESC'],
        ],
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