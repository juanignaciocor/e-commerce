import axios from "axios"
import { SEARCH_WINES, ALL_WINES } from "../store/constants"

export const showWine = vinos => ({
    type: SEARCH_WINES,
    vinos
});

export const allWines = allWines => ({
    type: ALL_WINES,
    allWines: allWines
});


export const showsWines = vino => dispatch =>
    axios.post('/api/wines/search', vino)
        .then(vino => dispatch(showWine(vino.data)))



export const searchAllWines = () => {


    return function (dispatch, getState) {
        axios.get(` /api/wines/allWines`)
            .then((res) => {

                dispatch(allWines(res.data))
            })


    }



}