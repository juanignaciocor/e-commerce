import React from "react";

export default ({ allUsers, changeAdmin, changeUser, usuario }) => {
    return (
        <React.Fragment>
            <div style={{ color: "black" }} className="container">
                <h4>Informacion de todos los usuarios :</h4>
                <div className="ViewUsers">
                    {allUsers.map((user) => {
                        return (
                            <React.Fragment>
                                {user.typoUsuario === "superAdmin" ? (<React.Fragment />) : (
                                    <div className="card" key={user.id}>
                                        <div className="card-body" style={{ opacity: "0.7" }}>
                                            <h4 className="card-title">{user.nombre + " " + user.apellido}</h4>
                                            <p className="card-text">Email:{` ${user.email}`}</p>
                                            <p className="card-text">Domicilio:{` ${user.domicilio}`}</p>
                                            <p className="card-text">Tipo de Usuario:{` ${user.typoUsuario}`}</p>
                                            {usuario.typoUsuario === "admin" ? (
                                                <button className="btn btn-primary" onClick={() => (changeAdmin(user.id))}>Admin</button>

                                            ) : (

                                                    user.typoUsuario === "user" ? (<button className="btn btn-primary" onClick={() => (changeAdmin(user.id))}>Admin</button>
                                                    ) : (<button className="btn btn-dark" onClick={() => (changeUser(user.id))}>User</button>
                                                        )

                                                )}



                                        </div>
                                    </div>


                                )}

                            </React.Fragment>



                        )

                    })}
                </div>

            </div>
        </React.Fragment >
    )



}
//usuario.typoUsuario==="superAdmin"