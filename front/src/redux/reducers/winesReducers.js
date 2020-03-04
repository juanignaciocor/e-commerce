import { SEARCH_WINES } from "../store/constants"

const initialUserState = {
    vinosBusqueda : [],
    vinosTodos : [],
}
  
export default function (state = initialUserState, action) {
    switch(action.type) {
        case SEARCH_WINES:
            return {...state, vinosBusqueda : action.vinos}
        default:
          return state;
    }
}