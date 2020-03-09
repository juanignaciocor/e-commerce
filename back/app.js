const db = require("./db/db")
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const Router = require("./routes/index")
const cookieParser = require('cookie-parser');
const session = require("express-session");
const app = express();
require("./passport/passport")

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(cookieParser());
app.use(session({
    secret: "cats",
    // resave: true, // Guarda la sesion por mas que no haya sido modificada
    //saveUninitialized: true, // Cuando iniciamos sesion en una App, si modificamos algo y nno guardamos nada, se va a guardar la sesion
    //cookie: {
    //   secure: true // Nos indica que la COOKIE es segura, y puede vincularse mediante las sesiones del protocolo HTTP.
    // }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

app.use("/", Router)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})
db.sync({
    logging: false,
    force: false
})
    .then(function () {
        // asegurate de reemplazar el nombre de abajo con tu app de express
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
    .catch(console.error)













