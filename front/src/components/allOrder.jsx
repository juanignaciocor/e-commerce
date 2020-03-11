import React from "react";

export default ({ allOrder, changeInput, viewProducts, producto, ToogleProductos, vistaProductos }) => {

    return (
        <React.Fragment>
            <div>
                <h3>Ordenes de compra</h3>
                {allOrder.map((order) => {
                    return (
                        <div className="card" key={order.id}>
                            <ul>
                                <li>Usuario de tarjeta: {` ${order.dueñoTarjeta}`}</li>
                                <li> Direccion entrega: {` ${order.direccionEntrega}`}</li>
                                <li>Numero de tarjeta: {` ${order.numeroTarjeta}`}</li>
                                <li>Total de la compra : {` ${order.total}`}</li>
                                <li>Estado del envio: {` ${order.estado}`}</li>
                                <li>Correco electronico: {`${order.correoElectronico}`}</li>
                            </ul>


                            {producto.map((o) => {
                                return (

                                    <div key={o.producto.id}>
                                        {order.id === o.compraId ? (<div> <ul>
                                            <li>Nombre: {` ${o.producto.nombre}`}</li>
                                            <li> Descripcion: {` ${o.producto.descripcion}`}</li>
                                            <li>Precio: {` ${o.producto.precio}`}</li>
                                            <li>Cantidad: {` ${o.cantidad}`}</li>
                                        </ul></div>) : (<React.Fragment />)}

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
                    )
                })}
            </div>
        </React.Fragment>
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