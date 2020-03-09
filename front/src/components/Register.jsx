import React, { Fragment } from 'react';
import fbicon from "../../assets/facebook.svg"
import googleicon from "../../assets/search.svg"

export default ({ handleSubmit, handleChange, state }) => (
    <Fragment>
        <div>
            <label></label>
            <div className="container"><h2>Registro de Usuario</h2></div>
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn-facebook"><img className="icono" src={fbicon} />Registrarse con Facebook</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn-google" ><img className="icono" src={googleicon} />Registrarse con Google</button>
                    </div>
                </div>
            </div>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationServer01">Nombre</label>
                        <input type="text" onChange={handleChange} name="nombre" className="form-control is-valid" id="validationServer01" placeholder="Nombre" required />
                        <div className="valid-feedback">
                            Looks good!
        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationServer02">Apellido</label>
                        <input type="text" onChange={handleChange} name="apellido" className="form-control is-valid" placeholder="Apellido" id="validationServer02" required />
                        <div className="valid-feedback">
                            Looks good!
        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationServerUsername">Fecha de Nacimiento</label>
                        <div className="input-group">
                            <input type="text" onChange={handleChange} name="fechaNacimiento" className="form-control is-invalid" placeholder="DD/MM/AA" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required />
                            <div className="invalid-feedback">
                                Please choose a username.
            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationServer03">Correo</label>
                        <input type="text" onChange={handleChange} name="email" className="form-control is-invalid" placeholder="Direccion de Correo Electronico" id="validationServer03" required />
                        <div className="invalid-feedback">
                            Please provide an Email.
            </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationServer05">Domicilio</label>
                        <input type="text" onChange={handleChange} name="domicilio" className="form-control is-invalid" placeholder="Domicilio" id="validationServer05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationServer03">Nombre de Usuario</label>
                        <input type="text" onChange={handleChange} name="username" className="form-control is-invalid" placeholder="Nombre de Usuario" id="validationServer03" required />
                        <div className="invalid-feedback">
                            Please provide an Email.
            </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationServer05">Contraseña</label>
                        <input type="text" onChange={handleChange} name="password" className="form-control is-invalid" placeholder="Contraseña" id="validationServer05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                        <label className="form-check-label" for="invalidCheck3">
                            Agree to terms and conditions
        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
            <label></label>
        </div>
        <div style={{ height: "235px" }}></div>
    </Fragment>
);