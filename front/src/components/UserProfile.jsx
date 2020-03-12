import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

export default ({orderProfile, props}) => {
    return (
        <div >
            {orderProfile.length &&
            <div style={{  display:"flex" ,flexDirection: "column" }}>
                <div style={{ backgroundColor : "black", opacity : "0.7", color: "white", margin: "42px 55px"}}>
                   
                <strong><h3 className="textoCentrado profile"> {`Welcome to Profile ${orderProfile[0].usuario.username}`}</h3></strong>
                <h5 className="textoCentrado profile"> {`Id Usuario: ${orderProfile[0].usuario.id}`}</h5>
                <h5 className="textoCentrado profile"> {`Usuario: ${orderProfile[0].usuario.nombre}`}</h5>
                <h5 className="textoCentrado profile"> {`Fecha de Nacimiento: ${orderProfile[0].usuario.fechaNacimiento}`}</h5>
                <h5 className="textoCentrado profile"> {`Email: ${orderProfile[0].usuario.email}`}</h5>
                <h5 className="textoCentrado profile"> {`Domicilio: ${orderProfile[0].usuario.domicilio}`}</h5>
                <h5 className="textoCentrado profile"> {`Tipo de usuario: ${orderProfile[0].usuario.typoUsuario}`}</h5>
                <h5 className="textoCentrado profile"> {`Fecha de creacion de usuario: ${orderProfile[0].usuario.updatedAt}`}</h5> 
                </div>
                <div style={{ overflow: "scroll", display:"flex", flexDirection:"column", height:"60vh", margin: "0px"}}>
                    {orderProfile.map(order => {
                        return (
                            <div classname="row" key={order.producto.id}>
                                <div className="card" style={{  display:"flex" }} >
                                    <div>
                                        <img src={order.producto.imagen} id="img"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-header" id="textoCentrado">{order.producto.nombre}</h5>
                                    <div>
                                        <hr></hr>
                                    </div>
                                        <h9 className="card-text"><strong>Bodega: </strong>{order.producto.bodega}</h9>
                                        <hr></hr>
                                        <h7 className="card-text"><strong>Cantidad: </strong>{order.cantidad}</h7>
                                        <hr></hr>
                                        <h7 className="card-text"><strong>Precio: </strong>${order.producto.precio},00</h7>
                                        <hr></hr>
                                        <h7 className="card-text"><strong>Añadido al carrito: </strong>{order.createdAt}</h7>
                                        <hr></hr>
                                        <h7 className="card-text"><strong>Efectuada la compra: </strong>{order.updatedAt}</h7>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            }
        </div>
    )
}
