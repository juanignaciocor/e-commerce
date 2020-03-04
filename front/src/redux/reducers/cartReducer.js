const initialCartState = {
    cart: []
}

export default function (state = initialCartState, action) {
    switch (action.type) {
        case "ADD_CART":
            return { ...state, cart: [...state.cart, action.cart] }

        default:
            return state;
    }
}