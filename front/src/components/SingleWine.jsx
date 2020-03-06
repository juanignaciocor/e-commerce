import React, { Fragment } from "react";

export default ({ vinoSeleccionado, handlerClick }) => {
    return (
        <Fragment>

            <div className="media">
                <img src={vinoSeleccionado.imagen} className="align-self-center mr-3 imagenSingle" alt="botella-de-vino" />
                <div className="media-body">
                    <label></label>
                    <h3 className="mt-0 single">{vinoSeleccionado.nombre}</h3>
                    <p className="mb-0 single"> Bodega: {vinoSeleccionado.bodega}</p>
                    <p className="mb-0 single"> Precio: ${vinoSeleccionado.precio},00</p>
                    <p className="mb-0 single"> Tipo: {vinoSeleccionado.tipo}</p>
                    <p className="mb-0 single"> Cepa: {vinoSeleccionado.cepa}</p>
                    <p className="mb-0 single"> Lugar de Origen: {vinoSeleccionado.provincia}</p>
                    <p className="mb-0 single"> Graduación alcohólica: {vinoSeleccionado.alcohol}%</p>
                    <p className="mb-0 single"> Descripción: {vinoSeleccionado.descripcion}</p>
                    <p className="mb-0 single"> Stock: {vinoSeleccionado.stock}</p>
                    <button onClick={handlerClick} className="btnComprar">Añadir al Carrito </button>
                </div>
            </div>
        </Fragment>
    )



}