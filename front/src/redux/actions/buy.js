import axios from "axios"
import { BUY_CART } from "../store/constants"

export const buyCart = (order) => ({
    type: BUY_CART,
    order
});


export const createOrder = (userId, creditCard, total) => dispatch => {
    axios.post('/api/cart/buy', { userId, creditCard, total })
        .then(res => res.data)
        .then(carrito => {
            dispatch(buyCart(carrito))
        })
        .catch(err => console.log(err))
}

