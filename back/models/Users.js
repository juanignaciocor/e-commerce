const S = require('sequelize')
const db = require("../db/db")
const crypto = require('crypto');
class Usuario extends S.Model { }

Usuario.init({
    nombre: {
        type: S.STRING,
        allowNull: false,

    },
    apellido: {
        type: S.STRING,
        allowNull: false,


    },
    email: {

        type: S.STRING,
        allowNull: false,
        unique: true

    },
    fechaNacimiento: {
        type: S.DATE


    },
    domicilio: {
        type: S.STRING


    },

    username: {
        type: S.STRING,
        allowNull: false,
        unique: true


    },
    password: {

        type: S.STRING,
        allowNull: false,


    },
    typoUsuario: {
        type: S.STRING,
        defaultValue: "user"


    },
    salt: {
        type: S.STRING



    }




}, { sequelize: db, modelName: 'usuario' })

Usuario.addHook("beforeCreate", (Usuario) => {

    Usuario.salt = crypto.randomBytes(20).toString('hex');
    Usuario.password = Usuario.hashPassword(Usuario.password);

})



Usuario.prototype.hashPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

Usuario.prototype.validPassword = function (password) {
    return this.password === this.hashPassword(password);
}

module.exports = Usuario;