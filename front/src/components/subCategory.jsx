import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg"
import wineNotFound from "../../assets/hola.jpeg"
export default ({ oneCategory, handlerClick }) => {
    console.log(oneCategory)
    return (

        <div>
            <div id="columns">
                {oneCategory.map((vino) => {

                    return (
                        vino.productos.map((productos) => {
                            return (
                                <figure key={productos.id}>
                                    <Link to={`/wines/${productos.id}`}>
                                        <div >
                                            <img src={productos.imagen}></img>
                                        </div>
                                    </Link>
                                    <figcaption>
                                        <p className="vino">{productos.nombre}</p>
                                        <div className="precioCarrito">
                                            <p className="precio">$ {productos.precio},00</p>
                                            <button onClick={() => handlerClick(productos.id)} > Añadir a Carrito  <img className="imgCarrito" src={cart} /></button>
                                        </div>

                                    </figcaption>
                                </figure>

                            )


                        })
                    )

                })}
            </div>

        </div >
    )


};