const db = require("./db/db")
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Router = require("./routes/index")
const {
    Usuario
} = require('./models/index.js');

var cookieParser = require('cookie-parser');
var session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const app = express();



////////
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(cookieParser());
app.use(passport.initialize());
app.use(session({
    secret: "cats"
}));
app.use(passport.session());


passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (inputEmail, password, done) {
        Usuario.findOne({
            where: {
                email: inputEmail
            }
        })
            .then(user => {
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username.'
                    });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                return done(null, user); //ESTA TODO OK!
            })
            .catch(done);
    }
));

// esto es para actualizar el status

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
});


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