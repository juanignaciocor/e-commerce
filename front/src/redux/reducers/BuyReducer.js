import { BUY_CART } from "../store/constants"

const initialCartState = {
    order: [],
    singleOrder: ""
}
export default function (state = initialCartState, action) {
    switch (action.type) {
        case BUY_CART:
            return { ...state, singleOrder: action.order }


        default:
            return state;
    }
}