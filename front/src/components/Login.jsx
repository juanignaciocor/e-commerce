import React, { Fragment } from 'react';

export default ({ handleSubmit, handleChange, state }) => (
    <Fragment>
        <div className=" loggin container card mb-3">
            <label></label>

            <div className="container"><h2>Iniciar Sesión</h2></div>
            <hr></hr>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Correo Electrónico</label>
                    <input onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={state.email} required />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" name="password" value={state.password} required />
                </div>
                {state.error ? <div class="alert alert-danger" role="alert">Error: The email entered is not registered or the password is incorrect</div> : null}
                <button style={{ width: "50%", margin: "0 auto" }} type="submit" className="btn btn-primary btn-lg btn-block" >Log In</button>
            </form>
            <label></label>
        </div>
        <div style={{ height: "350px" }}></div>
    </Fragment>

);