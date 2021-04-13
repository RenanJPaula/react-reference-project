import { User } from "../../models/user.inteface";
import { ReducerBuilder } from "../../utils/redux/reducer-builder";
import { AuthActionTypes, AuthState, INITIAL_STATE } from "./auth-types";

const reduxBuilder = new ReducerBuilder<AuthState>(INITIAL_STATE);

reduxBuilder.addReducer<User>(AuthActionTypes.LOGIN, (state, payload) => {
    return { ...state, authenticated: true };
});

// reduxBuilder.addMutableReducer<User>(AuthActionTypes.LOGIN, (state, payload) => {
//     state.authenticated = !!payload;
// });

export default reduxBuilder.build();
