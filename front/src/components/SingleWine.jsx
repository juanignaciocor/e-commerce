import React, { Fragment } from "react";

export default ({ vinoSeleccionado }) => {
    return (
        <Fragment>

            <div className="media">
                <img src={vinoSeleccionado.imagen} className="align-self-center mr-3" alt="botella-de-vino" />
                <div className="media-body">
                    <h5 className="mt-0">{vinoSeleccionado.nombre}</h5>
                    <p className="mb-0"> Bodega: {vinoSeleccionado.bodega}</p>
                    <p className="mb-0"> Precio: ${vinoSeleccionado.precio}</p>
                    <p className="mb-0"> Tipo: {vinoSeleccionado.tipo}</p>
                    <p className="mb-0"> Cepa: {vinoSeleccionado.cepa}</p>
                    <p className="mb-0"> Graduación alcohólica: {vinoSeleccionado.alcohol}%</p>
                    <p className="mb-0"> Descripción: {vinoSeleccionado.descripcion}</p>
                    <p className="mb-0"> Stock: {vinoSeleccionado.stock}</p>
                </div>
            </div>
        </Fragment>
    )



}