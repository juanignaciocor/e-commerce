import React from 'react';


export default ({ total, creditCardChange, correo, cambiarCorreo, creditCard, orderCreate, cambiarUsuario, cambiarDireccion, direccion, usuarioCredito }) => {

    return (
        <div>
            <div className="card" style={{ margin: "0px auto", maxWidth: "40%", padding: "2%", borderRadius: "30px" }}>
                <div className="card-body">
                    <div className="hijitos">
                        <label><strong>Nombre del titular de la tarjeta: </strong></label>
                        <input className="inputHijitos" type="text"
                            placeholder=" Ingrese su nombre aquí"
                            onChange={cambiarUsuario}
                            value={usuarioCredito}
                        />
                    </div>
                    <div className="hijitos">
                        <label><strong>Direccion de entrega: </strong></label>
                        <input className="inputHijitos" type="text"
                            placeholder=" Ingrese su dirección aquí"
                            onChange={cambiarDireccion}
                            value={direccion} />
                    </div>
                    <div className="hijitos">
                        <label><strong>Ingrese numero de tarjeta: </strong></label>
                        <input className="inputHijitos" type="text"
                            placeholder="   XXXXXXXXXXXXXXXX"
                            onChange={creditCardChange}
                            value={creditCard}
                        />
                    </div>
                    <div className="hijitos">
                        <label><strong>Ingrese su correo electronico: </strong></label>
                        <input className="inputHijitos" type="text"
                            placeholder="mimail@ejemplo.com"
                            onChange={cambiarCorreo}
                            value={correo}
                        />
                    </div>
                    <div className="hijitos">
                        <label><strong>Total de su compra: </strong></label>
                        <input className="inputHijitos" type="text" value={total} />

                    </div>
                    <hr></hr>
                    <button type="button" onClick={() => (orderCreate(total))} class="btnFinCompra btn btn-outline-primary btn-lg btn-block">Comprar</button>
                </div>
            </div>
        </div >
    )

}