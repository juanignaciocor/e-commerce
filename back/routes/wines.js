const express = require('express');
const router = express.Router();
const { Producto } = require("../models/index")

router.get("/search/:vino", function (req, res, next) {
    const vino = req.params.vino
    Producto.findAll({ where: { tipo: vino } })
        .then(data => {
            if (!data) res.sendStatus(404)
            res.json(data)
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