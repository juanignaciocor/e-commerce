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

                    <div className="hijitos">
                        <strong><label>Nombre:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder=" Nombre del vino"
                            name="nombre"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Precio:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder=" Precio"
                            name="precio"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Descripción:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder="Descripción del producto"
                            name="descripcion"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Imagen:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder="Ingrese url de la imagen"
                            name="imagen"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Tipo:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder="Ejemplos: Tinto, Blanco, etc."
                            name="tipo"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Cepa:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder="Ejemplo: Malbec"
                            name="cepa"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Stock:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder="Numero de stock"
                            name="stock"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Bodega:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder="Ejemplo: Catena Zapata"
                            name="bodega"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Provincia:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            name="provincia"
                            onChange={handlerChange}
                        />
                    </div>
                    <div className="hijitos">
                        <strong><label>Alcohol:</label></strong>
                        <input
                            className="inputHijitos"
                            type="text"
                            placeholder="Cantidad de alcohol"
                            name="alcohol"
                            onChange={handlerChange}
                        />

                    </div>
                    <div>
                        {
                            allCategory.map((categoria) => {
                                return (
                                    <div className="hijitos" key={categoria.id}>
                                        <input className="inputHijitos" type="checkbox" id={categoria.id} value={categoria.nombre} onChange={handleCheckbox} />
                                        {categoria.nombre}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <input className="btn btn-outline-secondary" type="submit" value="enviar" />
                </form>
            </div>
        </div >
    )
};












