import React from 'react';


export default ({ total, creditCardChange, correo, cambiarCorreo, creditCard, orderCreate, cambiarUsuario, cambiarDireccion, direccion, usuarioCredito }) => {

    return (
        <div>

            <div>
                <label>Nombre del dueño de la tarjeta</label>
                <input type="text"
                    placeholder=" Juan Gonzales"
                    onChange={cambiarUsuario}
                    value={usuarioCredito}
                />
            </div>
            <div>
                <label>Direccion de entrega</label>
                <input type="text"
                    placeholder=" San Fernando 2039"
                    onChange={cambiarDireccion}
                    value={direccion} />
            </div>
            <div>
                <label>Ingrese numero de tarjeta :</label>
                <input type="text"
                    placeholder="Numero de tarjeta"
                    onChange={creditCardChange}
                    value={creditCard}
                />
            </div>
            <div>
                <label>Ingrese su correo electronico:</label>
                <input type="text"
                    placeholder="Correo electronico"
                    onChange={cambiarCorreo}
                    value={correo}
                />
            </div>
            <div>
                <label>Total de su compra</label>
                <input type="text" value={total} />

            </div>
            <button onClick={() => (orderCreate(total))}>Comprar</button>






        </div >
    )

}