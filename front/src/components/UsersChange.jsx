import React from "react";

export default ({ allUsers, changeAdmin, changeUser }) => {
    return (
        <React.Fragment>
            <div>
                <h4>Informacion de todos los usuarios :</h4>
                <div className="ViewUsers">
                    {allUsers.map((user) => {
                        return (
                            <div className="ViewUser" key={user.id}>
                                <ul>
                                    <li>Nombre de usuario:{user.nombre + " " + user.apellido}</li>
                                    <li>Email:{` ${user.email}`}</li>
                                    <li>Domicilio:{` ${user.domicilio}`}</li>
                                    <li>Tipo de Usuario:{` ${user.typoUsuario}`}</li>
                                    {user.typoUsuario === "user" ? (<button onClick={() => (changeAdmin(user.id))}>Admin</button>
                                    ) : (<button onClick={() => (changeUser(user.id))}>User</button>
                                        )}
                                </ul>
                            </div>


                        )

                    })}
                </div>

            </div>
        </React.Fragment>
    )



}