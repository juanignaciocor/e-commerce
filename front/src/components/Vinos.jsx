import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg"
import wineNotFound from "../../assets/hola.jpeg"

export default ({ vinos, handlerClick }) => {
    console.log(vinos.length)
    return (
        <Fragment>
            {vinos.length ?
                (<div>
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
                </div>)
                :
                (
                    <div>
                        <div style={{ height: "70px" }}></div>
                        <div className="not-Found container card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="https://www.wsetglobal.com/media/1056/error-404-cork.png" className="card-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">No hay productos que coincidan con tu búsqueda. </h5>
                                        <ul>
                                            <li>  Revisá la ortografía de la palabra. </li>
                                            <li> Utilizá palabras más genéricas o menos palabras. </li>
                                            <li>  Visitá nuestra <Link to="/allWines"><span> página de productos</span>.</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "450px" }}></div>
                    </div>
                )
            }
        </Fragment>
    )
}





