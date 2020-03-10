import React, { Fragment } from 'react';
import fbicon from "../../assets/facebook.svg"
import googleicon from "../../assets/search.svg"
export default ({ handleSubmit, handleChange, state, handleClickFb }) => (
    <Fragment>

        <div className=" usuario container card mb-3">
            <label></label>
            <div className="container"><h2>Registro de Usuario</h2></div>
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn-facebook" onClick={handleClickFb}><img className="icono" src={fbicon} />Registrarse con Facebook</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn-google" ><img className="icono" src={googleicon} />Registrarse con Google</button>
                    </div>
                </div>
            </div>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom01">Nombre</label>
                        <input type="text" onChange={handleChange} name="nombre" className="form-control" placeholder="Nombre" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom01">Apellido</label>
                        <input type="text" onChange={handleChange} name="apellido" className="form-control" placeholder="Apellido" id="validationServer02" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationServerUsername">Fecha de Nacimiento</label>
                        <div className="input-group">
                            <input type="text" onChange={handleChange} name="fechaNacimiento" className="form-control" placeholder="DD/MM/AA" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">Correo</label>
                        <input type="text" onChange={handleChange} name="email" className="form-control" placeholder="Direccion de Correo Electronico" id="validationServer03" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">Domicilio</label>
                        <input type="text" onChange={handleChange} name="domicilio" className="form-control" placeholder="Domicilio" id="validationServer05" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">Nombre de Usuario</label>
                        <input type="text" onChange={handleChange} name="username" className="form-control" placeholder="Nombre de Usuario" id="validationServer03" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">Contraseña</label>
                        <input type="password" onChange={handleChange} name="password" className="form-control" placeholder="Contraseña" id="validationServer05" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck3" required />
                        <label className="form-check-label">
                            Acepto los terminos y condiciones del sitio
        </label>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Registrarse</button>
            </form>
            <label></label>
        </div>
        <div style={{ height: "140px" }}></div>
    </Fragment>

);




















