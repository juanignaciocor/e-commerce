import { SEARCH_WINES, ALL_WINES } from "../store/constants"




const initialUserState = {
    vinosBusqueda: [],
    vinosTodos: [],
}

export default function (state = initialUserState, action) {
    switch (action.type) {
        case SEARCH_WINES:
            return { ...state, vinosBusqueda: action.vinos }
        case ALL_WINES:
            return Object.assign({}, state, {
                vinosTodos: action.allWines,

            });
        default:
            return state;
    }
}