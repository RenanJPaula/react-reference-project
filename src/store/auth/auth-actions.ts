import { action } from "typesafe-actions";
import { User } from "../../models/user.inteface";
import { AuthActionTypes } from "./auth-types";

export const login = (user: User) => action(AuthActionTypes.LOGIN, { user });
