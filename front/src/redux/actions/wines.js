import axios from "axios"
import { SEARCH_WINES } from "../store/constants"

export const showWine = vinos => ({
    type: SEARCH_WINES,
    vinos
});

export const showsWines = vino => dispatch => {
    return(
        axios.get(`/api/wines/search/${vino}`)
        .then(res => res.data)
        .then(vino => dispatch(showWine(vino)))
        .catch(err => {throw new Error(err)})
    )
}