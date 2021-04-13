
import { combineReducers } from "redux";
import authState from "./auth/auth-reducer";

const reducers = combineReducers({
    authState
});

export default reducers;
