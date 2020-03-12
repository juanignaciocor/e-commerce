import { SINGLE_WINE, ALL_CART, SEARCH_WINES, ALL_WINES, ALL_TINTOS, ALL_BLANCOS, ALL_ROSADOS } from "../store/constants"




const initialUserState = {
    vinosBusqueda: [],
    vinosTodos: [],
    categoryTintos: [],
    categoryBlancos: [],
    categoryRosados: [],
    singleWine: {},
    singleCategory: {},
    vinoSeleccionado: []
}

export default function (state = initialUserState, action) {
    switch (action.type) {
        case SEARCH_WINES:
            return { ...state, vinosBusqueda: action.vinos }
        case ALL_WINES:
            return Object.assign({}, state, {
                vinosTodos: action.allWines,

            });
        case ALL_TINTOS:
            return Object.assign({}, state, {
                categoryTintos: action.allTintos,

            });
        case ALL_BLANCOS:
            return Object.assign({}, state, {
                categoryBlancos: action.allBlancos,

            });
        case ALL_ROSADOS:
            return Object.assign({}, state, {
                categoryRosados: action.allRosados,

            });
        case "SINGLE":
            return Object.assign({}, state, {
                singleWine: action.wine,

            });
        case "CREAR_CATEGORY":
            return Object.assign({}, state, {
                singleCategory: action.category,

            });
        case SINGLE_WINE:
            return { ...state, vinoSeleccionado: [action.vinoSeleccionado] };
        default:
            return state;
    }
}