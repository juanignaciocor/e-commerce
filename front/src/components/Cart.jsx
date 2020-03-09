import React from "react"
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default ({ user, cart, searchCart, removeClick, orderCreate, creditCardChange, creditCard }) => {
    let totalPrecio = 0
=======
export default ({ user, cart, searchCart, removeClick }) => {
    console.log(user.username, "usernameeeeeeeeeeeeee");

>>>>>>> fa9f6f0ec3f9d218e21237d8450e4d681640da6c
    if (user.username) {
        return (
            <div>
                <div >
                    <h3>Efectue su compra</h3>
                    <label>Ingrese numero de tarjeta :</label>
                    <input type="text"
                        placeholder="4732426575629090"
                        onChange={creditCardChange}
                        value={creditCard}
                    />
                    {searchCart.map((carrito) => { totalPrecio += carrito.producto.precio })}
                    <input type="text"
                        value={totalPrecio} />
                    <button onClick={() => (orderCreate(totalPrecio))}>Comprar</button>
                </div>
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