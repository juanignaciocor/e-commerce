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
export const stockCart = (stock) => ({
    type: "STOCK",
    stock

});

export const recoverCart = (stock) => ({
    type: "RECOVER",
    stock
})
export const input = (data) => ({
    type: "CAMBIO",
    data
})
export const createCartItem = (item) => dispatch => {
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

export const userRemoveCart = (userId, productoId, precio, cantidad) => {
    return function (dispatch, getState) {
        return axios.delete((`/api/cart/removeCart/${userId}/${productoId}`))
            .then((data) => {
                return dispatch(searchUserCart(userId))

            })





    }
}

export const sumarCantidad = (idProducto, precio, userId, cantidad) => {
    return function (dispatch, getState) {
        return axios.put('/api/cart/sumar', { idProducto, cantidad })
            .then((res) => {
                let total = cantidad * precio
                dispatch(stockCart(total))
            })
            .then((data) => {
                dispatch(searchUserCart(userId))

            })
    }
}


export const restarCantidad = (idProducto, precio, userId, cantidad) => {
    return function (dispatch, getState) {
        return axios.put('/api/cart/resta', { idProducto, cantidad })
            .then((res) => {
                let total = cantidad * precio
                return dispatch(recoverCart(total))
            })
            .then((data) => {
                return dispatch(searchUserCart(userId))

            })
    }
}

export const inputChange = (idProducto, valor, userId) => {

    return function (dispatch, getState) {
        return axios.put(`/api/cart/input`, { idProducto, valor })
            .then((res) => {
                return dispatch(searchUserCart(userId))
            })


    }

}