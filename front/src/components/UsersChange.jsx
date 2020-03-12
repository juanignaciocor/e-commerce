import React from "react";

export default ({ allUsers, changeAdmin, changeUser }) => {
    return (
        <React.Fragment>
            <div style={{ color: "black" }} className="container">
                <h4>Informacion de todos los usuarios :</h4>
                <div className="ViewUsers">
                    {allUsers.map((user) => {
                        return (
                            <div className="card" key={user.id}>
                                <div className="card-body" style={{ opacity: "0.7" }}>
                                    <h4 className="card-title">{user.nombre + " " + user.apellido}</h4>
                                    <p className="card-text">Email:{` ${user.email}`}</p>
                                    <p className="card-text">Domicilio:{` ${user.domicilio}`}</p>
                                    <p className="card-text">Tipo de Usuario:{` ${user.typoUsuario}`}</p>
                                    {user.typoUsuario === "user" ? (<button className="btn btn-primary" onClick={() => (changeAdmin(user.id))}>Admin</button>
                                    ) : (<button className="btn btn-dark" onClick={() => (changeUser(user.id))}>User</button>
                                        )}
                                </div>
                            </div>


                        )

                    })}
                </div>

            </div>
        </React.Fragment >
    )



}