const initialUserState = {
    logged : {}
}
  
export default function (state = initialUserState, action) {
    switch(action.type) {
        case "LOGGUE_USER":
            return {...state, logged: action.user}
        case "LOGGUE_OUT_USER":
            return {...state, logged: {}}
        default:
          return state;
    }
}