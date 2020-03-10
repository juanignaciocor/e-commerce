import React, { Fragment } from "react";

export default ({ reviews }) => {

    return (
        <Fragment>
            <h3 className="textoCentrado">Reseñas de nuestros usuarios</h3>
            <div className="reviews">
                {reviews.length ? (
                    reviews.map(review => {
                        return (
                            <div key={review.id} className="singleReview card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">Comentario</div>
                                <div className="card-body">
                                    <h5 className="card-title">Light card title</h5>
                                    <p className="card-text">{review.comentario}</p>
                                </div>
                            </div>

                        )
                    })
                ) : null
                }
            </div>
        </Fragment>
    )
}