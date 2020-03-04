import React from "react"
import { Route, Switch } from "react-router-dom"


export default ({user}) => {

    return (
        
        <div>
            <label></label>
        {user.username ?(
            <h2>{`Carrito de ${user.username}`}</h2>
            
            ):( <h2>Carrito</h2>)}
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