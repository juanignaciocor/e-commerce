import axios from "axios"
import { ADD_CART } from "../store/constants"

export const addCart = (item) => ({
    type: ADD_CART,
    cart: item
});

export const createCartItem = (item) => dispatch => {

    axios.post('/api/cart/add', item)
        .then(res => res.data)
        .then(producto => dispatch(addCart(producto)))
        .then(err => err)
}

