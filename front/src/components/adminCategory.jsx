import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
export default ({ newCategory, handleCategory, nombreCategoria }) => (

    <div style={{ color: "black", margin: "0 auto", padding: "1%" }} className="container">
        <h3 className="especial" >Crear una categoría: </h3>
        <div className="card mb-3" style={{ marginLeft: "30%", padding: "1%", color: "black", textAlign: "center", backgroundColor: "white", borderRadius: "30px", width: "50%" }} >
            <form className="card" onSubmit={newCategory}>
                <input type="text"
                    placeholder="Nombre de la categoría"
                    onChange={handleCategory}
                    value={nombreCategoria}></input>
                <input id="btnFinCompra" type="submit"></input>
            </form>
        </div>

    </div>



);




