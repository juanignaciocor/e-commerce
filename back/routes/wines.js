const express = require('express');
const router = express.Router();
const { Producto } = require("../models/index")


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


router.post("/search", function (req, res) {
    res.sendStatus(200)
})





module.exports = router