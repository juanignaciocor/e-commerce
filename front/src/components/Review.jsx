import React, { Fragment } from "react";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default ({ reviews }) => {
    return (
        <Fragment>
            <h3 className="textoCentrado">Reseñas de nuestros usuarios</h3>
            <div className="reviews">
                {reviews.length ? (
                    reviews.map(review => {
                        return (
                            <>
                                <div key={review.id} className="singleReview card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                                    <Box className="card-header" component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="read-only" value={review.valoracion} readOnly />

                                    </Box>
                                    <div className="card-body">
                                        <p className="card-text">{review.comentario}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                ) : null
                }
            </div>
        </Fragment>
    )
}