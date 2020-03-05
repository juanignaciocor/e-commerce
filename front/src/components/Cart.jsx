import React from "react"
import { Link } from "react-router-dom";


export default ({user, cart}) => {
    if(user.username){
        return(
            <div>
                <label></label>
                <h2>{`Carrito de ${user.username}`}</h2>
                <hr></hr>
                <div className = "container">
                    {cart.map(item => {
                    return (
                        <figure key={item.id}>
                            <Link to={`/wines/${item.productoId}`}>
                                <div class="card">
                                    <h5 class="card-header">Nombre del producto del carrito</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">Bodega</h5>
                                        <p class="card-text">Precio del producto</p>
                                        <button type="button" class="btn btn-outline-danger">Remover del Carrito</button>
                                    </div>
                                </div>
                            </Link>
                        </figure>
                    )
                    })}   
                </div >
                <label></label>
            </div>
        )
    }else{
        return (
            <div>
                <label></label>
                <h2>Carrito</h2>
                <hr></hr>
                    <div className = "container">
                        <div class="card">
                            <h5 class="card-header">Nombre del producto del carrito</h5>
                            <div class="card-body">
                                <h5 class="card-title">Bodega</h5>
                                <p class="card-text">Precio del producto</p>
                                <button type="button" class="btn btn-outline-danger">Remover del Carrito</button>
                            </div>
                        </div>
                    </div >
                <label></label>
            </div>
    
        )
    }
}