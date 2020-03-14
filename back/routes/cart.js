const express = require('express');
const router = express.Router();
const { Carrito, Producto, Usuario, Compra } = require("../models/index")

const sendMail = function (dueñoTarjeta, numTarj, email, total, dir) {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "winesellectionp5@gmail.com",
            pass: "plataforma5"
        }
    });
    const mailOptions = {
        from: "winesellectionp5@gmail.com",
        to: `${email}`,
        subject: "Confirmación de tu compra",
        text: `Estimado/a ${dueñoTarjeta}.
        Su compra se ha efectudo satisfactoriamente al número de tarjeta ${numTarj} por un monto total de $ ${total}. 
        La entrega será en ${dir} en aproximadamente 3 días.
        Recuerde que puede realizar comentarios de los productos adquiridos, Su opinión nos interesa.

    
        Muchas gracias por elegirnos`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Se ha enviando el mail");
        }
    });
}


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
            Carrito.update({ compraId: compra.id, estado: "fulfilled", opinion: false }, { where: { usuarioId: req.body.userId, estado: "pending" } })
                .then((data) => {
                    sendMail(req.body.dueñoTarjeta, tarjetaCredito, req.body.correo, totalPrecio, req.body.direccion)
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