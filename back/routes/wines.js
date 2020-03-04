const express = require('express');
const router = express.Router();
const { Producto } = require("../models/index")

router.get("/search/:vino", function(req, res, next){
    console.log('ESTOY EN EL GET')
    const vino = req.params.vino
    Producto.findAll({where: {tipo : vino}})
    .then( data => {
        if(!data) res.sendStatus(404)
        res.json(data)
    })
    .catch(err => {throw new Error(err)})
})

module.exports = router