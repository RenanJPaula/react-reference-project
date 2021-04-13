export interface AuthState { 
    authenticated: boolean;
}

export const INITIAL_STATE: AuthState = {
    authenticated: false
}

export enum AuthActionTypes {
    LOGIN = '@auth/LOGIN'
}
