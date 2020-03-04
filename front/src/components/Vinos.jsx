import React, { Fragment } from "react";
import { Link } from "react-router-dom";

 export default ({ vinos }) => {
    return (
        <Fragment>
            <h3> VINOS</h3>
            {vinos.map(vino => {
                return(
                <Link to={`/vinos/${vino.id}`} key={vino.id}>
                        <img src={vino.imagen}></img>
                    <div>
                        <p>{vino.nombre}</p>
                        <p>Precio: ${vino.precio},00</p>
                    </div>
                </Link>
                )
            })}
        </Fragment>
    )
}



