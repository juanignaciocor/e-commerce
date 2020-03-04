const express = require('express');
const router = express.Router();
const { Producto } = require("../models/index")

router.post("/search", function(req,res){
    res.sendStatus(200)
})

module.exports = router