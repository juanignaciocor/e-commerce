import { SEARCH_CART, REMOVE_CART } from "../store/constants"

const initialCartState = {
    cart: [],
    searchCart: [],
    removeCart: {}
}
export default function (state = initialCartState, action) {
    switch (action.type) {
        case "ADD_CART":
            return { ...state, cart: [...state.cart, action.cart] }
        case SEARCH_CART:
            return Object.assign({}, state, {
                searchCart: action.searchCart,

            });
        case REMOVE_CART:
            return Object.assign({}, state, {
                removeCart: action.remove,

            });



        default:
            return state;
    }
}