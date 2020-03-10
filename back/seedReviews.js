const { Review } = require("./models/index")


Review.create({
    comentario: "muy bueno, muy rico",
    valoracion: 5,
    usuarioId: 1,
    productoId: 2,
    compraId: 1
})
Review.create({
    comentario: "Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.",
    valoracion: 4,
    usuarioId: 1,
    productoId: 2,
    compraId: 2
})