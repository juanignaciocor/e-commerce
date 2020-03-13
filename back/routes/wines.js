const express = require('express');
const router = express.Router();
const { Producto, Review, Compra, Carrito } = require("../models/index")
const { Op } = require("sequelize");




router.get("/reviews/:idProducto/:idUsuario", function (req, res, next) {
    const idProducto = req.params.idProducto
    const idUsuario = req.params.idUsuario

    Carrito.findAll(
        {
            where: {
                usuarioId: idUsuario,
                productoId: idProducto,
            }
        }
    )
        .then(carritos => {
            res.json(carritos)

        })

})

// router.post("/reviews/:idProducto/:idUsuario", function (req, res, next) {
//     const idProducto = req.params.idProducto
//     const idUsuario = req.params.idUsuario
//     const rating = req.body.rating
//     const opinion = req.body.opinion

//     Review.create({
//         comentario: opinion,
//         valoracion: rating,
//     })
//         .then(review => {
//             Carrito.update({ opinion: true }, { where: { usuarioId: idUsuario, productoId: idProducto, opinion: false } })
//             review.setProducto(idProducto)
//             return (review.setUsuario(idUsuario))
//         })
//         .then(review => (res.send(review)))

// })




router.post("/reviews/:idProducto/:idUsuario", function (req, res, next) {
    const idProducto = req.params.idProducto
    const idUsuario = req.params.idUsuario
    const rating = req.body.rating
    const opinion = req.body.opinion
    let promedio = 0

    Producto.findByPk(idProducto)
        .then(res => res.dataValues)
        .then(producto => {
            return (promedio = producto.puntaje)
        })

        .then(Review.create({
            comentario: opinion,
            valoracion: rating,
        })
            .then(review => {
                Carrito.update({ opinion: true }, { where: { usuarioId: idUsuario, productoId: idProducto, opinion: false } })
                if (promedio == 0) {
                    Producto.update({ puntaje: rating }, { where: { id: idProducto } })
                } else {
                    let total = (promedio + rating) / 2
                    Producto.update({ puntaje: total }, { where: { id: idProducto } })
                }
                review.setProducto(idProducto)
                return (review.setUsuario(idUsuario))
            })
            .then(review => (res.send(review))))

})




//rutas para el admin

router.delete("/single/adm/destroy/:id", (req, res, next) => {
    console.log(req.params.id, "djsakdhsakdj")
    Producto.destroy({
        where: {
            id: req.params.id

        }
    })
        .then((data) => res.json(data))

})


router.post('/single/adm/crear', (req, res, next) => {
    Producto.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        tipo: req.body.tipo,
        cepa: req.body.cepa,
        stock: req.body.stock,
        bodega: req.body.bodega,
        provincia: req.body.provincia,
        alcohol: req.body.alcohol,
        imagen: req.body.imagen

    })
        .then((producto) => {
            let arreglo = []
            for (key in req.body.categoria) {
                arreglo.push(req.body.categoria[key])
            }
            producto.addCategoria(arreglo)
        })
        .then((data) => res.sendStatus(200))

})
router.put("/single/adm/update", (req, res, next) => {
    Producto.update({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        tipo: req.body.tipo,
        cepa: req.body.cepa
        , stock: req.body.stock,
        bodega: req.body.bodega,
        provincia: req.body.provincia,
        alcohol: req.body.alcohol
    }, { where: { id: req.body.idProducto } })
        .then((data) => { res.sendStatus(200) })

})
router.get("/single/:idProducto", (req, res, next) => {
    Producto.findByPk(req.params.idProducto)
        .then((data) => {
            res.json(data)
        })
})

//
router.get("/reviews/:id", function (req, res, next) {
    const id = req.params.id
    Review.findAll(
        {
            where: {
                productoId: id
            }
        }
    )
        .then(reviews => {
            res.json(reviews)
        })

})


router.get("/search/:vino", function (req, res, next) {
    const vino = req.params.vino.toLowerCase()
    const first = vino.substr(1, vino.length)
    const firstLetter = vino.toUpperCase().substr(0, 1)
    const search = firstLetter + first

    Producto.findAll()
        .then(data => {
            if (!data) res.sendStatus(404)
            const winesFilter = data.filter(wine => wine.tipo.includes(search) ||
                wine.nombre.includes(search) ||
                wine.cepa.includes(search) ||
                wine.bodega.includes(search) ||
                wine.provincia.includes(search)
            )
            res.json(winesFilter)
        })
        .catch(err => { throw new Error(err) })
})


router.get("/allWines", function (req, res, next) {
    Producto.findAll()
        .then((data) => {

            res.status(200).json(data)


        })
        .catch(next)

})
router.get("/category/tinto", function (req, res, next) {
    Producto.findAll({ where: { tipo: "Tinto" } })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})
router.get("/category/rosado", function (req, res, next) {
    Producto.findAll({ where: { tipo: "Rosado" } })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})
router.get("/category/blanco", function (req, res, next) {
    Producto.findAll({ where: { tipo: "Blanco" } })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})


router.get("/:id", function (req, res) {
    const id = req.params.id;
    Producto.findAll({
        where: {
            id
        }
    })
        .then((vino) => {
            res.status(200).send(vino)
        })
})



module.exports = router