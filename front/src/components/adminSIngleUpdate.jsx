import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
export default ({ wine, handlerChange, submit }) => (
    <Fragment>
        <div className="form-adm">

            <h2>Editar su producto</h2>
            <form onSubmit={submit}>

                <div>
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder=" Nombre del vino"
                        name="nombre"
                        onChange={handlerChange}
                        defaultValue={wine.nombre}


                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="text"
                        placeholder=" Precio"
                        name="precio"
                        onChange={handlerChange}
                        defaultValue={wine.precio}


                    />
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input type="text"
                        placeholder="Numero de tarjeta"
                        name="descripcion"
                        onChange={handlerChange}
                        defaultValue={wine.descripcion}



                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="text"
                        placeholder="Ingrese url de la imagen"
                        name="imagen"
                        onChange={handlerChange}
                        defaultValue={wine.imagen}


                    />
                </div>
                <div>
                    <label>Tipo:</label>
                    <input type="text"
                        placeholder="Tipo de vino"
                        name="tipo"
                        onChange={handlerChange}
                        defaultValue={wine.tipo}



                    />
                </div>
                <div>
                    <label>Cepa:</label>
                    <input type="text"
                        placeholder="Ejemplo : Malbec"
                        name="cepa"
                        onChange={handlerChange}
                        defaultValue={wine.cepa}



                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="text"
                        placeholder="Numero de stock"
                        name="stock"
                        onChange={handlerChange}
                        defaultValue={wine.stock}



                    />
                </div>
                <div>
                    <label>Bodega:</label>
                    <input type="text"
                        placeholder="Ejemplo:Catena Zapata"
                        name="bodega"
                        onChange={handlerChange}
                        defaultValue={wine.bodega}


                    />
                </div>
                <div>
                    <label>Provincia:</label>
                    <input type="text"
                        name="provincia"
                        onChange={handlerChange}
                        defaultValue={wine.provincia}



                    />
                </div>
                <div>
                    <label>Alcohol:</label>
                    <input type="text"
                        placeholder="cantidad de alcohol"
                        name="alcohol"
                        onChange={handlerChange}
                        defaultValue={wine.alcohol}

                    />

                </div>
                <div>
                    <label>Categoria:</label>
                    <input type="text"
                        placeholder="Categoria" />

                </div>
                <input type="submit" value="enviar" />




            </form>
        </div >

    </Fragment>

);



