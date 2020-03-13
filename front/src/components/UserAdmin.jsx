import React from "react";
import { Link } from "react-router-dom"
export default ({ ToogleUsers, ToogleOrdenes, ToogleCategorias, ToogleProductos }) => {
    return (
        <React.Fragment>
            <div className="card mb-3" style={{ padding: "1%", marginTop: "2%", color: "black", textAlign: "center", backgroundColor: "white", borderRadius: "30px", width: "50%" }} className="container">
                <h2 className="especial" >Bienvenido a la sección de Admins</h2>
                <div>
                    <h3>Funcionalidades de Admin</h3>
                    <center>
                        <ul style={{ width: "40%" }} >
                            <li onClick={ToogleUsers}>Ver y modificar usuarios</li>
                            <li onClick={ToogleOrdenes}>Ver lista de ordenes</li>
                            <li onClick={ToogleCategorias}>Crear categoría</li>
                            <li>Productos :
                            <ul>
                                    <Link to="/user/admin/createProduct"><li>Crear</li></Link>
                                    <Link to="/user/admin/editProduct"><li>Editar/eliminar</li></Link>

                                </ul>
                            </li>

                        </ul>
                    </center>
                </div>


            </div>
        </React.Fragment>
    )



}