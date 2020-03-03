const Producto = require("./Productos")
const Carrito = require("./Carritos")
const Compra = require("./Compras")
const Usuario = require("./Users")
const Review = require("./Reviews")

Carrito.belongsTo(Usuario)
Carrito.belongsTo(Producto)
Carrito.belongsTo(Compra)
Usuario.hasMany(Compra, { as: 'compra' })
Review.belongsTo(Usuario)
Review.belongsTo(Producto)





module.exports = { Usuario, Producto, Carrito, Compra, Review }