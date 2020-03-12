import React from "react"
import { Link } from "react-router-dom";

export default ({ user, total, cantidad, searchCart, togglearCompra, Restar, removeClick, orderCreate, Sumar, cambiarCantidad }) => {
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
                                            onClick={() => removeClick(item.producto.id, item.producto.precio)}
                                        >Remover del Carrito</button>
                                        <input type="number"
                                            min="0"
                                            max={item.producto.stock}
                                            value={item.producto.input}
                                            onChange={(e) => {
                                                cambiarCantidad(item.producto.id, e.target.value)
                                            }}
                                        />
                                        <input type="submit" value="Confirmar" onClick={() => Sumar(item.producto.id, item.producto.precio, item.producto.input)} />
                                        {total < cantidad * item.producto.precio ?
                                            (<input type="submit" value="Retroceder" onClick={() => (alert("No puede tener valores negativos"))} />
                                            ) : (<input type="submit" value="Retroceder" onClick={() => Restar(item.producto.id, item.producto.precio, item.cantidad)} />
                                            )}






                                        <Link to={`/wines/${item.producto.id}`}>  <img className="cartImagen" src={item.producto.imagen}></img></Link>

                                    </div>
                                </div>

                            </figure>
                        )
                    })}

                </div >
                <h3>Desea efectuar su compra ? Haga click <button onClick={togglearCompra}>aqui</button> </h3>
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