const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("../db/db")
const passport = require('passport');

/*
<<<<<<< Este es el midelware de passport que vamos a usar mas adelante >>>>>>>

function isLogedIn(req, res, next) {
    if (req.session.passport.user) {
        next();
    } else {
        console.log("no se logueo")
    }
}
*/

module.exports = router