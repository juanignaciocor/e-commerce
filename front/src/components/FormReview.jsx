import React, { Fragment } from "react";
import ReviewContainer from "../containers/ReviewContainer"
import StarRating from "./StarRating"


export default ({ carritos, handlerChange, handlerSubmit, handlerChange2, ranking, opinion }) => {
    const falsos = carritos.filter((carrito) => carrito.opinion === false)
    return (
        <div>
            {
                carritos ? (
                    <>

                        {falsos.length ? (
                            <Fragment>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8">
                                            <div className="reviewUsuario container card mb-3">
                                                <h5>Calificación del vino</h5>
                                                <StarRating handlerChange2={handlerChange2} />
                                                <form onSubmit={handlerSubmit}>
                                                    <h5>Dejanos un comentario del vino</h5>
                                                    <div className="form-group">
                                                        <textarea name={opinion} onChange={handlerChange} className="form-control" id="exampleFormControlTextarea1" rows="3" value={opinion}></textarea>
                                                        {/* <input type="text-area" class="form-control" id="exampleFormControlTextarea1" rows="3" /> */}
                                                        <button className="publicarReview" >Publicar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                </div>
                            </Fragment>
                        ) : null}
                    </>
                ) : null
            }
        </div>
    )
}