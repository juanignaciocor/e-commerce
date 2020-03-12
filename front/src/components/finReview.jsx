import React, { Fragment } from "react";
import { Link } from "react-router-dom";


export default () => {
    return (
        <Fragment>
            <div>
                <div style={{ height: "70px" }}></div>
                <div className="not-Found container card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://cdn.steemitimages.com/DQmYfaPw8qM6w7PQzQpgkEh7mUD9zFUM5vR6UQqFyY73A9j/cheers-1.jpg" className="card-img" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{ margin: "10%", padding: "5%" }}>
                                <h3 className="card-title">Su comentario ha sido publicado </h3>
                                <ul style={{ marginTop: "10%" }}>
                                    <li>  Para seguir comprando <Link to="/allWines"><span> haga click aqui</span>.</Link></li>
                                    <li>  Puede ver su publicación ingresando al producto.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "450px" }}></div>
            </div>
        </Fragment>
    )
}