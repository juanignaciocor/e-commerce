import React, { Fragment } from "react";
import ReviewContainer from "../containers/ReviewContainer"

export default ({ user, carritos, vinoSeleccionado, handlerClick }) => {
    let falsos = []
    let nuevoCarrito = [...carritos]

    console.log(Array.isArray(nuevoCarrito))
    console.log(nuevoCarrito)
    console.log(nuevoCarrito.map)
    return (
        <>
            {
                (vinoSeleccionado.id) ? (<Fragment> <div id="ContenedorSingle" className=" media " >
                    {/*Inicio carrusel */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div className=" carousel-inner">
                            <div className="carousel-item active">
                                <img className="imagenSingle" src={vinoSeleccionado.imagen} />
                            </div>
                            <div className="imagenSingle carousel-item">
                                <img className="imagenSingle" src="https://www.winestyletravel.com/wp-content/uploads/2018/11/portada-entrevino_winestyle.jpg" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only ">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only ">Next</span>
                        </a>
                    </div>
                    {/*Fin carrusel */}
                    <div id="ContenedorSingleWineText">
                        <h3 className="mt-0 singleWineText"><strong>{vinoSeleccionado.nombre}</strong></h3>
                        <p className="mb-0 singleWineText"> <strong>Bodega: </strong> {vinoSeleccionado.bodega}</p>
                        <p className="mb-0 singleWineText"> <strong>Precio: </strong>${vinoSeleccionado.precio},00</p>
                        <p className="mb-0 singleWineText"> <strong>Tipo: </strong>{vinoSeleccionado.tipo}</p>
                        <p className="mb-0 singleWineText"> <strong>Cepa: </strong> {vinoSeleccionado.cepa}</p>
                        <p className="mb-0 singleWineText"> <strong>Lugar de Origen:</strong> {vinoSeleccionado.provincia}</p>
                        <p className="mb-0 singleWineText"> <strong>Graduación alcohólica:</strong> {vinoSeleccionado.alcohol}%</p>
                        <p className="mb-0 singleWineText"> <strong>Descripción: </strong> {vinoSeleccionado.descripcion}</p>
                        <p className="mb-0 singleWineText"> <strong>Stock: </strong>{vinoSeleccionado.stock}</p>
                        <button onClick={handlerClick} className="btnComprar">Añadir al Carrito </button>
                        <center><img style={{ marginTop: "20px", width: "400px", height: "60px" }} src="https://cepadevinos.com/wp-content/uploads/2016/08/logos-tarjetas.jpg" /></center>
                    </div>
                </div>
                    <div>
                        {
                            nuevoCarrito ? (
                                <>
                                    {nuevoCarrito.map((carrito) => {
                                        if (carrito.opinion === false) falsos.push(carrito)
                                    })}
                                    {falsos.length ? (
                                        <Fragment>
                                            <div className="not-Found container card mb-3">
                                                <h3>Calificación del vino</h3>
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                                <h3>Dejanos un comentario del vino</h3>
                                                <form>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" />
                                                        <div class="btn-group-toggle" data-toggle="buttons">
                                                            <label class="btn btn-secondary active">
                                                                <input type="checkbox" checked /> Checked
  </label>
                                                        </div>





                                                    </div>
                                                </form>
                                            </div>
                                        </Fragment>
                                    ) : null}
                                </>
                            ) : null


                        }
                    </div>

                    <ReviewContainer vinoSeleccionado={vinoSeleccionado} /> </Fragment>) : null
            }

        </>
    )



}

