import { combineReducers } from 'redux';
import winesReducers from "./winesReducers"
import userReducers from "./usersReducers"
import cartReducers from "./cartReducer"
import buyReducers from "./BuyReducer"

export default combineReducers({
     userReducers: userReducers,
     winesReducers: winesReducers,
     cartReducers: cartReducers,
     buyReducers: buyReducers
});