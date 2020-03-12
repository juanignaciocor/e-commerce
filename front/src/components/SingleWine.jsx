import React, { Fragment } from "react";
import ReviewContainer from "../containers/ReviewContainer"
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default ({ wineId, reviews, handlerChange, handlerChange2, handlerSubmit, ranking, opinion, user, carritos, vinoSeleccionado, handlerClick }) => {

    const arrayValoraciones = []
    for (let i = 0; i < reviews.length; i++) {
        arrayValoraciones.push(reviews[i].valoracion)
    }
    let suma = 0
    for (let i = 0; i < arrayValoraciones.length; i++) {
        suma += arrayValoraciones[i]
    }
    const promedio = suma / (arrayValoraciones.length)

    return (
        <>
            {
                (vinoSeleccionado.length) ? (<Fragment> <div id="ContenedorSingle" className=" media " >
                    {/*Inicio carrusel */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div className=" carousel-inner">
                            <div className="carousel-item active">
                                <img className="imagenSingle" src={vinoSeleccionado[0].imagen} />
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
                        <h3 className="mt-0 singleWineText"><strong>{vinoSeleccionado[0].nombre}</strong></h3>
                        <Box className="card-header" component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="read-only" value={promedio} style={{ paddingLeft: "35%" }} readOnly />
                        </Box>
                        <p className="mb-0 singleWineText"> <strong>Bodega: </strong> {vinoSeleccionado[0].bodega}</p>
                        <p className="mb-0 singleWineText"> <strong>Precio: </strong>${vinoSeleccionado[0].precio},00</p>
                        <p className="mb-0 singleWineText"> <strong>Tipo: </strong>{vinoSeleccionado[0].tipo}</p>
                        <p className="mb-0 singleWineText"> <strong>Cepa: </strong> {vinoSeleccionado[0].cepa}</p>
                        <p className="mb-0 singleWineText"> <strong>Lugar de Origen:</strong> {vinoSeleccionado[0].provincia}</p>
                        <p className="mb-0 singleWineText"> <strong>Graduación alcohólica:</strong> {vinoSeleccionado[0].alcohol}%</p>
                        <p className="opinionmb-0 singleWineText"> <strong>Descripción: </strong> {vinoSeleccionado[0].descripcion}</p>
                        <p className="mb-0 singleWineText"> <strong>Stock: </strong>{vinoSeleccionado[0].stock}</p>
                        <button onClick={handlerClick} className="btnComprar">Añadir al Carrito </button>
                        <center><img style={{ marginTop: "20px", width: "400px", height: "60px" }} src="https://cepadevinos.com/wp-content/uploads/2016/08/logos-tarjetas.jpg" /></center>
                    </div>
                </div>


                    <ReviewContainer wineId={wineId} /> </Fragment>) : null
            }

        </>
    )



}

