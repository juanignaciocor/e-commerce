import { combineReducers } from 'redux';
import winesReducers from "./winesReducers"
import userReducers from "./usersReducers"
import cartReducers from "./cartReducer"
import buyReducers from "./BuyReducer"
import categoryReducers from "./categoryReducer"
import reviewsReducers from "./reviews"

export default combineReducers({
     userReducers: userReducers,
     winesReducers: winesReducers,
     cartReducers: cartReducers,
     buyReducers: buyReducers,
     categoryReducers: categoryReducers,
     reviewsReducers: reviewsReducers,
});