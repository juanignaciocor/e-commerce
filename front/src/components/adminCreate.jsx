import React, { Fragment } from 'react';
import fbicon from "../../assets/facebook.svg"
import googleicon from "../../assets/search.svg"
export default ({ handlerChange, submit, allCategory, handleCheckbox }) => {
    console.log(allCategory)
    return (
        <div style={{ margin: " 5% auto" }} className="form-adm">
            <h3 className="especial" >Crear un producto:</h3>
            <div className="card md-10" style={{ padding: "10%", borderRadius: "30px", width: "100%" }}>
                <form onSubmit={submit}  >

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
                        <label>Descripción:</label>
                        <input type="text"
                            placeholder="Descripción del producto"
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
                            placeholder="Ejemplos: Tinto, Blanco o Rosado"
                            name="tipo"
                            onChange={handlerChange}


                        />
                    </div>
                    <div>
                        <label>Cepa:</label>
                        <input type="text"
                            placeholder="Ejemplo: Malbec"
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
                            placeholder="Ejemplo: Catena Zapata"
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
                            placeholder="Cantidad de alcohol"
                            name="alcohol"
                            onChange={handlerChange}
                        />

                    </div>
                    <div>
                        {
                            allCategory.map((categoria) => {
                                return (
                                    <div key={categoria.id}>
                                        <input type="checkbox" id={categoria.id} value={categoria.nombre} onChange={handleCheckbox} />
                                        {categoria.nombre}
                                    </div>
                                )


                            })
                        }


                    </div>
                    <input type="submit" value="enviar" />




                </form>

            </div>

        </div >
    )
};












