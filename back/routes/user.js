const express = require('express');
const router = express.Router();
const { Producto, Usuario, Compra, Carrito } = require("../models/index")
const { Op } = require("sequelize");


const adminUser = function (req, res, next) {
    if (req.user.typoUsuario === "admin" || req.user.typoUsuario === "superAdmin") {
        next()
    } else {
        res.sendStatus(401)
    }
}






router.get("/admin/allOrderProducts/:idProducto", adminUser, (req, res, next) => {
    Carrito.findAll({
        include: [{
            model: Compra,
        },
        {
            model: Producto,
        }], where: { estado: "fulfilled" }
    })
        .then((data) => res.json(data))
})
router.put("/admin/changeToEnviado", adminUser, (req, res, next) => {
    Compra.findByPk(req.body.idOrder)
        .then((compra) => {
            compra.update({ estado: req.body.valor })

        })
        .then((data) => res.json(data))
})
router.get("/admin/allOrder", adminUser, (req, res, next) => {
    Compra.findAll()
        .then((data) => {
            res.json(data)
        })
})
router.get("/admin/fetchAllUser", adminUser, (req, res, next) => {
    Usuario.findAll()
        .then(data => res.json(data))
})

router.put("/admin/changeToAdmin", adminUser, (req, res, next) => {
    Usuario.findByPk(req.body.idUser)
        .then((usuario) => {
            usuario.update({ typoUsuario: "admin" })

        })
        .then((data) => res.json(data))

})

router.put("/admin/changeToUser", adminUser, (req, res, next) => {
    Usuario.findByPk(req.body.idUser)
        .then((usuario) => {
            usuario.update({ typoUsuario: "user" })

        })
        .then((data) => res.json(data))
})

router.get("/profile/:userId", (req, res, next) => {
    Carrito.findAll({
        include: [{
            model: Usuario,
            where: { id: req.params.userId }
        },
        {
            model: Producto,
        },
        ], where: { estado: "fulfilled" }
    })
        .then((order) => { console.log(order), res.json(order) })
})

module.exports = router
