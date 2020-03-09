import React from "react"
import { Link } from "react-router-dom";

export default ({ user, cart, searchCart, removeClick }) => {
    console.log(user.username, "usernameeeeeeeeeeeeee");

    if (user.username) {
        return (
            <div>
                <label></label>
                <h2>{`Carrito de ${user.username}`}</h2>
                <hr></hr>
                <div className="container">
                    {searchCart.map(item => {
                        return (
                            <figure key={item.producto.id}>

                                <div className="card">

                                    <h5 className="card-header">{item.producto.nombre}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">{`Bodega: ${item.producto.bodega}`}</h5>
                                        <p className="card-text">{`Precio: ${item.producto.precio},00`}</p>
                                        <button type="button"
                                            className="btn btn-outline-danger"
                                            onClick={() => removeClick(item.producto.id)}
                                        >Remover del Carrito</button>
                                        <Link to={`/wines/${item.producto.id}`}>  <img className="cartImagen" src={item.producto.imagen}></img></Link>

                                    </div>
                                </div>

                            </figure>
                        )
                    })}
                </div >
                <label></label>
            </div>
        )
    } else {
        return (
            <div>
                <label></label>
                <h2>Carrito</h2>
                <hr></hr>
                <div className="container">
                    <div className="card">
                        <h5 className="card-header">Nombre del producto del carrito</h5>
                        <div className="card-body">
                            <h5 className="card-title">Bodega</h5>
                            <p className="card-text">Precio del producto</p>
                            <button type="button" className="btn btn-outline-danger">Remover del Carrito</button>
                        </div>
                    </div>
                </div >
                <label></label>
            </div>

        )
    }
}