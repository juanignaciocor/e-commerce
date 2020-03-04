import React, { Fragment } from "react";
import { Link } from "react-router-dom";

 export default ({ vinos }) => {
    return (
        <Fragment>
            <h3> VINOS</h3>
            {vinos.map(vino => {
                <Link to={`/vinos/${vino.id}`}>
                    <div key={vino.id}>
                        <img src={vino.imagen}></img>
                        <p>{vino.nombre}</p>
                        <p>Precio: ${vino.precio}</p>
                    </div>
                </Link>
            })}
        </Fragment>
    )
}



