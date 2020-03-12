import { DESLOGUEO_USER, ALL_USER, SHOW_USER_PROFILE } from "../store/constants"
const initialUserState = {
    logged: {},
    allUsers: [],
    orderProfile: [],
    allOrder: [],
    loading: false
}

export default function (state = initialUserState, action) {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, loading: true }
        case "LOGGUE_USER":
            return { ...state, logged: action.user, loading: false }
        case DESLOGUEO_USER:
            return { ...state, logged: {} }
        case ALL_USER:
            return { ...state, allUsers: action.allUser }
        case SHOW_USER_PROFILE:
            return { ...state, orderProfile: action.orderProfile }
        case "ALL_ORDER":
            return { ...state, allOrder: action.allOrder }
        default:
            return state;
    }
}