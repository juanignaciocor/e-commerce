import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
export default ({ wine, handlerChange, submit }) => (
    <Fragment>
        <div className="form-adm">
            <h3>Su producto actualmente:</h3>
            <form>

                <div>
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder=" Nombre del vino"
                        value={wine.nombre}

                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="text"
                        placeholder=" Precio"
                        value={wine.precio}
                    />
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input type="text"
                        placeholder="Numero de tarjeta"
                        value={wine.descripcion}
                    />
                </div>

                <div>
                    <label>Tipo:</label>
                    <input type="text"
                        placeholder="Tipo de vino"
                        value={wine.tipo}
                    />
                </div>
                <div>
                    <label>Cepa:</label>
                    <input type="text"
                        placeholder="Ejemplo : Malbec"
                        value={wine.cepa}
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="text"
                        placeholder="Numero de stock"
                        value={wine.stock}
                    />
                </div>
                <div>
                    <label>Bodega:</label>
                    <input type="text"
                        placeholder="Ejemplo:Catena Zapata"
                        value={wine.bodega}
                    />
                </div>
                <div>
                    <label>Provincia:</label>
                    <input type="text"
                        value={wine.Provincia}
                    />
                </div>
                <div>
                    <label>Alcohol:</label>
                    <input type="text"
                        placeholder="cantidad de alcohol"
                        value={wine.alcohol}
                    />

                </div>
                <div>
                    <label>Categoria:</label>
                    <input type="text"
                        placeholder="Categoria" />

                </div>




            </form>
            <h2>En este form puede editar su producto</h2>
            <form onSubmit={submit}>

                <div>
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder=" Nombre del vino"
                        name="nombre"
                        onChange={handlerChange}


                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="text"
                        placeholder=" Precio"
                        name="precio"
                        onChange={handlerChange}

                    />
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input type="text"
                        placeholder="Numero de tarjeta"
                        name="descripcion"
                        onChange={handlerChange}


                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="text"
                        placeholder="Ingrese url de la imagen"
                        name="imagen"
                        onChange={handlerChange}

                    />
                </div>
                <div>
                    <label>Tipo:</label>
                    <input type="text"
                        placeholder="Tipo de vino"
                        name="tipo"
                        onChange={handlerChange}


                    />
                </div>
                <div>
                    <label>Cepa:</label>
                    <input type="text"
                        placeholder="Ejemplo : Malbec"
                        name="cepa"
                        onChange={handlerChange}


                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="text"
                        placeholder="Numero de stock"
                        name="stock"
                        onChange={handlerChange}


                    />
                </div>
                <div>
                    <label>Bodega:</label>
                    <input type="text"
                        placeholder="Ejemplo:Catena Zapata"
                        name="bodega"
                        onChange={handlerChange}


                    />
                </div>
                <div>
                    <label>Provincia:</label>
                    <input type="text"
                        name="provincia"
                        onChange={handlerChange}


                    />
                </div>
                <div>
                    <label>Alcohol:</label>
                    <input type="text"
                        placeholder="cantidad de alcohol"
                        name="alcohol"
                        onChange={handlerChange}
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



