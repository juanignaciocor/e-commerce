import React from "react";

export default ({ ToogleUsers, ToogleOrdenes, ToogleCategorias, ToogleProductos }) => {
    return (
        <React.Fragment>
            <div>
                <h2>Bienvenido a la seccion de Admins</h2>
                <div>
                    <h3>Funcionalidades de Admin</h3>
                    <ul>
                        <li onClick={ToogleUsers}>Ver y modificar usuarios</li>
                        <li onClick={ToogleOrdenes}>Ver lista de ordenes</li>
                        <li>Crear , editar o eliminar categorias</li>
                        <li>Crear , editar o eliminar productos</li>

                    </ul>
                </div>


            </div>
        </React.Fragment>
    )



}