const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("../db/db")
const passport = require('../passport/passport');
const { Usuario } = require("../models/index")
const wines = require("./wines")
const cart = require("./cart")
const user = require("./user")

router.use('/api/user', user)
router.use('/api/wines', wines)
router.use('/api/cart', cart)

const loggedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.json(req.user)


    } else {
        res.json("")
    }


}


router.post("/user/register", function (req, res) {
    Usuario.create(req.body)
        .then(res.send("Se creo el usuario"))
})

router.get('/login/facebook',
    passport.authenticate('facebook', { scope: 'email' }
    ));

// handle the callback after facebook has authenticated the user
router.get('/login/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log(req.user)
        res.redirect('/');
    }
);

router.post('/user/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
})

router.get("/user/logout", function (req, res) {
    req.logout()
    res.send('deslogueado!')
})

router.get("/check", loggedUser)

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