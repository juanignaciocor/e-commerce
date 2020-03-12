import { CREATE_REVIEW, GET_REVIEW } from "../store/constants"

const initialReviewState = {
    review: {},
}

export default function (state = initialReviewState, action) {
    switch (action.type) {
        case CREATE_REVIEW:
            return { ...state, review: action.review }
        case GET_REVIEW:
            return { ...state, review: action.reviews }
        default:
            return state;
    }
}