
const initialCartState = {
    allCategory: [],
    oneCategory: [],

}
export default function (state = initialCartState, action) {
    switch (action.type) {
        case "ALL_CATEGORY":
            return { ...state, allCategory: action.allCategory }
        case "ONE_CATEGORY":
            return { ...state, oneCategory: action.single }
        default:
            return state;
    }
}