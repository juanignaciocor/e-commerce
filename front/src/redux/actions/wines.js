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

