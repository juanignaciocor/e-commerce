import axios from "axios"
import { ADD_CART, SEARCH_CART, REMOVE_CART } from "../store/constants"

export const addCart = (item) => ({
    type: ADD_CART,
    cart: item
});

export const searchCart = (searchCart) => ({
    type: SEARCH_CART,
    searchCart: searchCart
});

export const removeCart = (remove) => ({
    type: REMOVE_CART,
    remove: remove

});
export const createCartItem = (item) => dispatch => {
    console.log("llegue al aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacion",item)
    axios.post('/api/cart/add', item)
        .then(res => res.data)
        .then(carrito => dispatch(addCart(carrito)))
        .catch(err => console.log(err))
}

export const searchUserCart = (userId) => {
    return function (dispatch, getState) {
        axios.get(` /api/cart/userCart/${userId}`)
            .then((res) => { dispatch(searchCart(res.data)) })
    }
}

export const userRemoveCart = (userId, productoId) => {
    return function (dispatch, getState) {
        return axios.delete((`/api/cart/removeCart/${userId}/${productoId}`))
            .then((res) => {
                dispatch(removeCart(res.data))
            })
    }
}



