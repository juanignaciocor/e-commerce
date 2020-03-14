import React, { Fragment } from "react";
import { Link } from "react-router-dom";


export var FinCompra = () => {
    return (

        <div >
            <div style={{ height: "70px" }}></div>
            <div className="not-Found container card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img style={{ marginTop: "12%", marginLeft: "10%", borderRadius: "30px" }} src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{ margin: "6%", padding: "5%" }}>
                            <h3 className="card-title">Su compra ha sido realizada </h3>
                            <ul style={{ marginTop: "4%" }}>
                                <li>  Para seguir comprando <Link to="/allWines"><span> haga click aqui</span>.</Link></li>
                                <li>  Recibirá un correo electrónico con los detalles de su compra.</li>
                                <li>  Recuerde que puede realizar comentarios de los productos adquiridos, Su opinión nos interesa.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "450px" }}></div>
        </div>

    )
}