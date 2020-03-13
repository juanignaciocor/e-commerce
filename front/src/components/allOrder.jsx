import React from "react";

export default ({ allOrder, changeInput, viewProducts, producto, ToogleProductos, vistaProductos }) => {

    return (
        <React.Fragment>
            <div style={{ color: "black", margin: "0 auto" }} className="container">
                <h3>Ordenes de compra</h3>
                {allOrder.map((order) => {
                    return (
                        <div className="card" key={order.id}>
                            <div className="card-body">
                                <p className="card-text">Usuario de tarjeta: {` ${order.dueñoTarjeta}`}</p>
                                <p className="card-text"> Direccion entrega: {` ${order.direccionEntrega}`}</p>
                                <p className="card-text">Numero de tarjeta: {` ${order.numeroTarjeta}`}</p>
                                <p className="card-text">Total de la compra : {` ${order.total}`}</p>
                                <p className="card-text">Estado del envio: {` ${order.estado}`}</p>
                                <p className="card-text">Correco electronico: {`${order.correoElectronico}`}</p>


                                {producto.map((o) => {
                                    return (

                                        <div key={o.producto.id}>
                                            {order.id === o.compraId ? (<div>
                                                <p className="card-text">Nombre: {` ${o.producto.nombre}`}</p>
                                                <p className="card-text"> Descripcion: {` ${o.producto.descripcion}`}</p>
                                                <p className="card-text">Precio: {` ${o.producto.precio}`}</p>
                                                <p className="card-text">Cantidad: {` ${o.cantidad}`}</p>
                                            </div>) : (<React.Fragment />)}

                                        </div>)

                                })}
                                {order.estado === "Procesada" ? (
                                    <div>
                                        <button name="Completada" onClick={(e) => {
                                            return (changeInput(order.id, "Completada"))
                                        }} >Completar</button>
                                        <button name="Cancelada" onClick={(e) => {
                                            return (
                                                changeInput(order.id, "Cancelada"))
                                        }} >Cancelar</button>
                                    </div>)
                                    : (
                                        <div>
                                            <button name="Procesada" onClick={(e) => {
                                                return (
                                                    changeInput(order.id, "Procesada"))
                                            }} >Procesar</button>
                                            <button name="Cancelada" onClick={(e) => {
                                                return (
                                                    changeInput(order.id, "Cancelada"))
                                            }} >Cancelar</button>
                                        </div>



                                    )}
                            </div>
                        </div>
                    )

                })}

            </div>
        </React.Fragment >
    )



}

/* <button onClick={() => {
                                viewProducts(order.id)
                                    .then((data) => { ToogleProductos() })
                            }}>Ver lista</button>
                            {vistaProductos ? (<div>
                                {producto.map((o) => {
                                    return (

                                        <div key={o.producto.id}>
                                            {order.id === o.compra.id ? (<div>fue igual</div>) : (<div></div>)})}
                                        <ul>
                                                <li>Nombre: {` ${o.producto.nombre}`}</li>
                                                <li> Descripcion: {` ${o.producto.descripcion}`}</li>
                                                <li>Precio: {` ${o.producto.precio}`}</li>
                                            </ul>
                                        </div>)

                                })}
                            </div>) : (<div></div>)}

                */