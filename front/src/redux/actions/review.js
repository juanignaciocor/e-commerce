import axios from "axios"
import { CREATE_REVIEW, GET_REVIEW } from "../store/constants"

export const setReview = (review) => ({
    type: CREATE_REVIEW,
    review
});

export const getReview = (reviews) => ({
    type: GET_REVIEW,
    reviews
});



export const crearReview = (obj) => dispatch => {
    return (axios.post(`/api/wines/reviews/${obj.idProducto}/${obj.idUsuario}`, obj)
        .then(res => res.data)
        .then(review => dispatch(setReview(review)))
        .then(res => console.log("Se creo la review", res)
        )
    )
}

export const fetchReviews = (id) => dispatch => {
    axios.get(`/api/wines/reviews/${id}`)
        .then(res => res.data)
        .then(reviews => {
            dispatch(getReview(reviews))
        })
}




