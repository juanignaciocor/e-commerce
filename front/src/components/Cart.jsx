import React from "react"
import { Link } from "react-router-dom";

export default ({ user, total, cantidad, searchCart, togglearCompra, Restar, removeClick, orderCreate, Sumar, cambiarCantidad }) => {
    if (user.username) {
        return (
            <div>
                {
                    (searchCart ? (
                        <>
                            <label></label>
                            <h2 className="pasosCompra2 especial"><em >{`Carrito de ${user.username}`}</em></h2>
                            <hr></hr>
                            <div style={{ width: "fitContent", display: "flex", justifyContent: "center", alignItems: "center" }}><img src="/img/one.svg" style={{ width: "50px", height: "50px", margin: "1%" }} />
                                <h4 className="pasosCompra"> Confirme sus cantidades</h4>
                            </div>

                            <div className="container" style={{ display: "flex" }}>
                                {searchCart.map(item => {
                                    return (
                                        <figure key={item.producto.id} id="figure" >

                                            <div className="col-md-4"></div>
                                            <div className="col-md-8 card" id={"cardCarrito"}>

                                                <h5 className="card-header">{item.producto.nombre}</h5>
                                                <div className="card-body">
                                                    <h5 className="card-title">{`Bodega: ${item.producto.bodega}`}</h5>
                                                    <p className="card-text">{`Precio: ${item.producto.precio},00`}</p>
                                                    <div style={{ display: "flex" }} >
                                                        <input className="form-control mr-sm-2" type="number" style={{ width: "fit-content" }}
                                                            min="0"
                                                            max={item.producto.stock}
                                                            value={item.producto.input}
                                                            onChange={(e) => {
                                                                cambiarCantidad(item.producto.id, e.target.value)
                                                            }}
                                                        />
                                                        <input type="submit" className="btn btn-outline-secondary" value="Confirmar" onClick={() => Sumar(item.producto.id, item.producto.precio, item.producto.input)} />
                                                        {total < cantidad * item.producto.precio ?
                                                            (<input type="submit" className="btn btn-outline-secondary" value="Retroceder" onClick={() => (alert("No puede tener valores negativos"))} />
                                                            ) : (<input type="submit" className="btn btn-outline-secondary" value="Retroceder" onClick={() => Restar(item.producto.id, item.producto.precio, item.cantidad)} />
                                                            )}
                                                    </div>


                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Link to={`/wines/${item.producto.id}`}>

                                                            <img className="cartImagen" id="cartImage" src={item.producto.imagen} />
                                                        </Link>
                                                        <button style={{
                                                            height: "fit-content",
                                                            alignSelf: "flex-end"
                                                        }} type="button"
                                                            className="btn btn-outline-danger"
                                                            onClick={() => removeClick(item.producto.id, item.producto.precio)}
                                                        >Remover del Carrito</button>

                                                    </div>


                                                </div>
                                            </div>

                                        </figure>
                                    )
                                })}

                            </div >
                            <div style={{ width: "fitContent", display: "flex", justifyContent: "center", alignItems: "center" }}><img src="/img/two.svg" style={{ width: "50px", height: "50px", margin: "1%" }} />
                                <h4 className="pasosCompra2 pasosCompra"> Confirme los datos<br /> de su compra</h4>
                            </div>

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





