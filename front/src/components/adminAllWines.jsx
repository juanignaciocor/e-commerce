import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import fbicon from "../../assets/facebook.svg"
import googleicon from "../../assets/search.svg"
export default ({ allWines, destroyProduct }) => (
    <Fragment>
        <div>
            {allWines.map((vino) => {
                return (

                    <div className="card" key={vino.id}>
                        <div className="card-body">
                            <p className="card-text">Nombre:{` ${vino.nombre}`}</p>
                            <p className="card-text"> Tipo de vino:{` ${vino.tipo}`}</p>
                            <p className="card-text">Cepa:{` ${vino.cepa}`}</p>
                            <Link to={`/user/admin/edit/${vino.id}`}><button class="btn btn-success">editar</button></Link>
                            <button className="btn btn-danger" onClick={() => (destroyProduct(vino.id))}>eliminar</button>
                        </div>
                    </div>

                )

            })}
        </div>
    </Fragment>

);



















