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

    axios.post('/api/cart/add', item)
        .then(res => res.data)
        .then(producto => dispatch(addCart(producto)))
        .then(err => err)
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



