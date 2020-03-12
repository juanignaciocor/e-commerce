import React from "react";
import { Link } from "react-router-dom"
export default ({ ToogleUsers, ToogleOrdenes, ToogleCategorias, ToogleProductos }) => {
    return (
        <React.Fragment>
            <div style={{ color: "black", textAlign: "center" }} className="container">
                <h2>Bienvenido a la seccion de Admins</h2>
                <div>
                    <h3>Funcionalidades de Admin</h3>
                    <ul>
                        <li onClick={ToogleUsers}>Ver y modificar usuarios</li>
                        <li onClick={ToogleOrdenes}>Ver lista de ordenes</li>
                        <li onClick={ToogleCategorias}>Crear categoria</li>
                        <li>Productos :
                            <ul>
                                <Link to="/user/admin/createProduct"><li>Crear</li></Link>
                                <Link to="/user/admin/editProduct"><li>Editar/eliminar</li></Link>

                            </ul>
                        </li>

                    </ul>
                </div>


            </div>
        </React.Fragment>
    )



}