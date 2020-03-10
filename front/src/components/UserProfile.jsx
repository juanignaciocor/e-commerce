import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

export default ({orderProfile, props}) => {
    return (
        <div>
            {orderProfile.length &&
            <div>
                <strong><h3 className="textoCentrado profile"> {`Welcome to Profile ${orderProfile[0].usuario.username}`}</h3></strong>
                <h5 className="textoCentrado profile"> {`Id Usuario: ${orderProfile[0].usuario.id}`}</h5>
                <h5 className="textoCentrado profile"> {`Usuario: ${orderProfile[0].usuario.nombre}`}</h5>
                <h5 className="textoCentrado profile"> {`Fecha de Nacimiento: ${orderProfile[0].usuario.fechaNacimiento}`}</h5>
                <h5 className="textoCentrado profile"> {`Email: ${orderProfile[0].usuario.email}`}</h5>
                <h5 className="textoCentrado profile"> {`Domicilio: ${orderProfile[0].usuario.domicilio}`}</h5>
                <h5 className="textoCentrado profile"> {`Tipo de usuario: ${orderProfile[0].usuario.typoUsuario}`}</h5>
                <h5 className="textoCentrado profile"> {`Fecha de creacion de usuario: ${orderProfile[0].usuario.updatedAt}`}</h5>
                <div>
                    {orderProfile.map(order => {
                        return (
                            <figure key={order.producto.id}>
                                <div className="card" id="colBuy">
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <img src={order.producto.imagen} id="img"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-header" id="textoCentrado">{order.producto.nombre}</h5>
                                    <div>
                                    </div>
                                        <h5 className="card-text">{`Bodega: ${order.producto.bodega}`}</h5>
                                        <p className="card-text">{`Precio: $${order.producto.precio},00`}</p>
                                        <p className="card-text">{`Añadido al carrito: ${order.createdAt}`}</p>
                                        <p className="card-text">{`Efectuada la compra: ${order.updatedAt}`}</p>
                                    </div>
                                </div>
                            </figure>
                        )
                    })}
                </div>
            </div>
            }
        </div>
    )
}
