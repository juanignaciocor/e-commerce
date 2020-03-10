import axios from "axios"
import { BUY_CART } from "../store/constants"
import { searchUserCart } from "../actions/cart"

export const buyCart = (order) => ({
    type: BUY_CART,
    order
});


export const createOrder = (userId, creditCard, total, direccion, dueñoTarjeta) => dispatch => {
    axios.post('/api/cart/buy', { userId, creditCard, total, direccion, dueñoTarjeta })
        .then(res => res.data)
        .then(carrito => {
            dispatch(searchUserCart(userId))
        })
        .catch(err => console.log(err))
}

