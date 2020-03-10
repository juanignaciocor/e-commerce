import React from 'react';


export default ({ total, creditCardChange, creditCard, orderCreate, cambiarUsuario, cambiarDireccion, direccion, usuarioCredito }) => {

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
                    placeholder="4732426575629090"
                    onChange={creditCardChange}
                    value={creditCard}
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