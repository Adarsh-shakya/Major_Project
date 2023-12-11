import {combineReducers} from "redux";

import authReducer from "./Auth.js";
import currentUserReducer from "./currentUser.js";

export default combineReducers({
    authReducer, currentUserReducer
})