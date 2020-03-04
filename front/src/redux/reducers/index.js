import { combineReducers } from 'redux';
import winesReducers from "./winesReducers"
import userReducers from "./usersReducers"

export default combineReducers({
     userReducers: userReducers,
     winesReducers: winesReducers
});