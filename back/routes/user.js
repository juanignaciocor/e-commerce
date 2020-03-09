const express = require('express');
const router = express.Router();
const { Producto, Usuario } = require("../models/index")
const { Op } = require("sequelize");



router.get("/admin/fetchAllUser", (req, res, next) => {
    Usuario.findAll()
        .then(data => res.json(data))
})

router.put("/admin/changeToAdmin", (req, res, next) => {
    Usuario.findByPk(req.body.idUser)
        .then((usuario) => {
            usuario.update({ typoUsuario: "admin" })

        })
        .then((data) => res.json(data))

})

router.put("/admin/changeToUser", (req, res, next) => {
    Usuario.findByPk(req.body.idUser)
        .then((usuario) => {
            usuario.update({ typoUsuario: "user" })

        })
        .then((data) => res.json(data))
})
module.exports = router
