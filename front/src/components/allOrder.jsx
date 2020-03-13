import React from "react";

export default ({ allOrder, changeInput, viewProducts, producto, ToogleProductos, vistaProductos }) => {

    return (
        <React.Fragment>
            <div style={{ color: "black", margin: "0 auto", padding: "1%" }} className="container">
                <h3 className="especial" >Ordenes de compra:</h3>
                {allOrder.map((order) => {
                    return (
                        <div style={{ padding: "2%", borderRadius: "30px" }} className="card" key={order.id}>
                            <div className="card-body">
                                <p className="card-text">Usuario de tarjeta: {` ${order.dueñoTarjeta}`}</p>
                                <p className="card-text"> Dirección entrega: {` ${order.direccionEntrega}`}</p>
                                <p className="card-text">Número de tarjeta: {` ${order.numeroTarjeta}`}</p>
                                <p className="card-text">Total de la compra : {` ${order.total}`}</p>
                                <p className="card-text">Estado del envío: {` ${order.estado}`}</p>
                                <p className="card-text">Correo electrónico: {`${order.correoElectronico}`}</p>


                                {producto.map((o) => {
                                    return (

                                        <div key={o.producto.id}>
                                            {order.id === o.compraId ? (<div>
                                                <p className="card-text">Nombre: {` ${o.producto.nombre}`}</p>
                                                <p className="card-text"> Descripción: {` ${o.producto.descripcion}`}</p>
                                                <p className="card-text">Precio: {` ${o.producto.precio}`}</p>
                                                <p className="card-text">Cantidad: {` ${o.cantidad}`}</p>
                                            </div>) : (<React.Fragment />)}

                                        </div>)

                                })}
                                {order.estado === "Procesada" ? (
                                    <div>
                                        <button style={{ margin: "1%" }} className="btn btn-primary" name="Completada" onClick={(e) => {
                                            return (changeInput(order.id, "Completada"))
                                        }} >Completar</button>
                                        <button style={{ margin: "1%" }} className="btn btn-primary" name="Cancelada" onClick={(e) => {
                                            return (
                                                changeInput(order.id, "Cancelada"))
                                        }} >Cancelar</button>
                                    </div>)
                                    : (
                                        <div>
                                            <button style={{ margin: "1%" }} className="btn btn-primary" name="Procesada" onClick={(e) => {
                                                return (
                                                    changeInput(order.id, "Procesada"))
                                            }} >Procesar</button>
                                            <button style={{ margin: "1%" }} className="btn btn-primary" name="Cancelada" onClick={(e) => {
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