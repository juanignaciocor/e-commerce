import React from "react"
import { Link } from "react-router-dom";

export default ({ user, cart, searchCart, togglearCompra, togglearStock, recoStock, removeClick, orderCreate, setStock, cambiarCantidad, toogleStock }) => {
    if (user.username) {
        return (
            <div>
                {
                    (searchCart ? (
                        <>
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
                                                    <input type="number"
                                                        min="1"
                                                        max={item.producto.stock}

                                                        onChange={cambiarCantidad}
                                                    />
                                                    {!toogleStock ? (<input value="Confirmar" type="submit" onClick={() => {
                                                        setStock(item.producto.id, item.producto.precio)
                                                            .then((data) => togglearStock()
                                                            )
                                                    }} />) : (<input value="Volver" type="submit" onClick={() => {
                                                        recoStock(item.producto.id, item.producto.precio)
                                                            .then((data) => togglearStock()
                                                            )
                                                    }} />)}

                                                    <Link to={`/wines/${item.producto.id}`}>  <img className="cartImagen" src={item.producto.imagen}></img></Link>

                                                </div>
                                            </div>

                                        </figure>
                                    )
                                })}

                            </div >
                            <h3>Desea efectuar su compra ? Haga click <button onClick={togglearCompra}>aqui</button> </h3>
                            <label></label>
                        </>

                    ) : null)
                }

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