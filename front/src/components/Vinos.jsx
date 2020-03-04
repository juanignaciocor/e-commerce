import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default ({ vinos }) => {
    return (
        <Fragment>
            <h3> VINOS</h3>
            <div id="columns">
                {vinos.map(vino => {
                    return (
                        <figure key={vino.id}>
                            <Link to={`/vinos/${vino.id}`}>
                                <div >
                                    <img src={vino.imagen}></img>
                                    <figcaption>
                                        <p>{vino.nombre}</p>
                                        <p>Precio: ${vino.precio}</p>
                                    </figcaption>
                                </div>
                            </Link>
                        </figure>
                    )
                })}
            </div>
        </Fragment>
    )
}



