import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg"

export default ({ vinos, handlerClick }) => {
    return (
        <Fragment>
            <h3 className="textoCentrado"> VINOS</h3>
            <div id="columns">
                {vinos.map(vino => {
                    return (
                        <figure key={vino.id}>
                            <Link to={`/wines/${vino.id}`}>
                                <div >
                                    <img src={vino.imagen}></img>
                                </div>
                            </Link>
                            <figcaption>
                                <p className="vino">{vino.nombre}</p>
                                <div className="precioCarrito">
                                    <p className="precio">$ {vino.precio},00</p>
                                    <button onClick={() => handlerClick(vino.id)} > Añadir a Carrito  <img className="imgCarrito" src={cart} /></button>
                                </div>

                            </figcaption>
                        </figure>
                    )
                })}
            </div>
        </Fragment>
    )
}





