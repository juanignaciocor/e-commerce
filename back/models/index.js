const Producto = require("./Productos")
const Carrito = require("./Carritos")
const Compra = require("./Compras")
const Usuario = require("./Users")
const Review = require("./Reviews")
const Categoria = require("./Categorias")

Carrito.belongsTo(Usuario)
Carrito.belongsTo(Producto)
Carrito.belongsTo(Compra)
Usuario.hasMany(Compra, { as: 'compra' })
Review.belongsTo(Usuario)
Review.belongsTo(Producto)
Categoria.hasMany(Producto, { as: 'producto' })



module.exports = { Usuario, Producto, Carrito, Compra, Review, Categoria }