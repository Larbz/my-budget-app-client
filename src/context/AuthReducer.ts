import { Reducer } from "react";
import { Auth } from "../interfaces/auth";
export const INITIAL_STATE = {
    isAuth: window.localStorage.getItem("isAuth")
        ? window.localStorage.getItem("isAuth")
        : "" || "",
    csrf: window.localStorage.getItem("csrf")
        ? window.localStorage.getItem("csrf")
        : "" || "",
};

export enum ActionTypes {
    LOGIN = "login",
    LOGOUT = "logout",
}
export type AuthAction =
    | { type: ActionTypes.LOGIN; payload: { isAuth: string; csrf: string } }
    | { type: ActionTypes.LOGOUT };

export const authReducer: Reducer<Auth, AuthAction> = (state, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            window.localStorage.setItem("isAuth", action.payload.isAuth);
            window.localStorage.setItem("csrf", action.payload.csrf);
            return {
                ...state,
                isAuth: action.payload.isAuth,
                csrf: action.payload.csrf,
            };
        }
        case ActionTypes.LOGOUT: {
            window.localStorage.removeItem("isAuth");
            window.localStorage.removeItem("csrf");
            return {
                ...state,
                isAuth: null,
                csrf: null,
            };
        }
    }
};
