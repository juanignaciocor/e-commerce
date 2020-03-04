const express = require('express');
const router = express.Router();
const { Producto } = require("../models/index")

router.post("/search", function (req, res) {
    res.sendStatus(200)
})

router.get("/allWines", function (req, res, next) {
    console.log("entreeeeeeeeeeeeeeeeeeeee")
    Producto.findAll()
        .then((data) => {

            res.status(200).json(data)


        })
        .catch(next)

})


module.exports = router