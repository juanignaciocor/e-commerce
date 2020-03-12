import axios from "axios"
import { SEARCH_WINES, ALL_WINES, ALL_TINTOS, ALL_BLANCOS, ALL_ROSADOS } from "../store/constants"

export const showWine = vinos => ({
    type: SEARCH_WINES,
    vinos
});

export const allWines = allWines => ({
    type: ALL_WINES,
    allWines: allWines
});
export const allTintos = allTintos => ({
    type: ALL_TINTOS,
    allTintos: allTintos
});
export const allBlancos = allBlancos => ({
    type: ALL_BLANCOS,
    allBlancos: allBlancos
});
export const allRosados = allRosados => ({
    type: ALL_ROSADOS,
    allRosados: allRosados
});
export const singleWine = wine => ({
    type: "SINGLE",
    wine: wine
});

export const singleCategory = category => ({
    type: "CREAR_CATEGORY",
    category

})

export const showsWines = vino => dispatch => {
    return (
        axios.get(`/api/wines/search/${vino}`)
            .then(res => res.data)
            .then(vino => dispatch(showWine(vino)))
            .catch(err => { throw new Error(err) })
    )
}


export const searchAllWines = () => {
    return function (dispatch, getState) {
        axios.get(` /api/wines/allWines`)
            .then((res) => { dispatch(allWines(res.data)) })
    }
}

export const searchTinto = () => {
    return function (dispatch, getState) {
        axios.get(` /api/wines/category/tinto`)
            .then((res) => { dispatch(allTintos(res.data)) })
    }
}

export const searchBlanco = () => {
    return function (dispatch, getState) {
        axios.get(`  /api/wines/category/blanco`)
            .then((res) => { dispatch(allBlancos(res.data)) })
    }
}

export const searchRosado = () => {
    return function (dispatch, getState) {
        axios.get(` /api/wines/category/rosado`)
            .then((res) => { dispatch(allRosados(res.data)) })
    }
}


export const fetchOneWine = (idProducto) => {
    return function (dispatch, getState) {
        return axios.get(`/api/wines/single/${idProducto}`)
            .then((res) => { dispatch(singleWine(res.data)) })
    }
}

export const admUpdate = (nombre, precio, descripcion, tipo, cepa, stock, bodega, provincia, alcohol, idProducto) => {
    return function (dispatch, getState) {
        return axios.put(`/api/wines/single/adm/update`, {
            nombre, precio, descripcion,
            tipo, cepa, stock, bodega, provincia, alcohol, idProducto
        })
            .then((res) => {
                console.log("llego la data")
            })
    }
}
export const admDestroy = (idProducto) => {
    return function (dispatch, getState) {
        return axios.delete(`/api/wines/single/adm/destroy/${idProducto}`)
            .then((data) => console.log("se elimino"))

    }
}

export const admCreate = (nombre, precio, descripcion, tipo, cepa, stock, bodega, provincia, alcohol, imagen, categoria) => {
    return function (dispatch, getState) {
        return axios.post('/api/wines/single/adm/crear', {
            nombre, precio, descripcion,
            tipo, cepa, stock, bodega, provincia, alcohol, imagen, categoria
        })
            .then((data) => { console.log("se creo ") })

    }
}


export const createCategory = (nombre) => {
    return function (dispatch, getState) {
        axios.post(` /api/category/new`, { nombre })
            .then((res) => { console.log("CREADO") })
    }
}