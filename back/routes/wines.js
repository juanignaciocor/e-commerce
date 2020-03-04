const express = require('express');
const router = express.Router();
const { Producto } = require("../models/index")
const { Op } = require("sequelize");

router.get("/search/:vino", function (req, res, next) {
    const vino = req.params.vino.toLowerCase()
    console.log(vino)

    const first = vino.substr(1,vino.length)
    const firstLetter = vino.toUpperCase().substr(0,1)
    const search = firstLetter+first

    Producto.findAll()
        .then(data => {
            if (!data) res.sendStatus(404)
            const winesFilter = data.filter(wine => wine.tipo.includes(search) || 
            wine.nombre.includes(search) ||
            wine.cepa.includes(search) ||
            wine.bodega.includes(search) ||
            wine.provincia.includes(search) ||
            wine.alcohol.includes(search)
            )
            res.json(winesFilter)
        })
        .catch(err => { throw new Error(err) })
})


router.get("/allWines", function (req, res, next) {
    console.log("entreeeeeeeeeeeeeeeeeeeee")
    Producto.findAll()
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