import produce from "immer";
import { Reducer } from "redux";
import { AuthActionTypes, AuthState, INITIAL_STATE } from "./auth-types";

const authReducer: Reducer<AuthState> = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case AuthActionTypes.LOGIN:
            return produce(state, response => {
                response.authenticated = true;
            });

        default:
            return state;
    }
}

export default authReducer;
