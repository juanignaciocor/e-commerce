
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const {
    Usuario
} = require('./models/index.js');

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
    console.log("ESTOY EN EL SERIALIZE", user)
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log("ENTROOOOOOOOOOOOOO")
    Usuario.findByPk(id)
        .then(user => {
            console.log(user, "YA ESTOY EN USEEEEEEEEEEEEEER")
            done(null, user)
        })
})


module.exports = passport
