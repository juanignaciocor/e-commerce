import axios from "axios"
import { SEARCH_WINES } from "../store/constants"

export const showWine = vinos => ({
    type: SEARCH_WINES,
    vinos
});

export const showsWines = vino => dispatch =>
    axios.post('/api/wines/search', vino)
        .then(user => dispatch(showWine(user.data)))