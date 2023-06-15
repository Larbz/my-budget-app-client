import { Reducer } from "react";
import { Auth } from "../../interfaces/auth";

export const INITIAL_STATE = {
    jwt: window.localStorage.getItem("jwt")
        ? window.localStorage.getItem("jwt")
        : "" || "",
    csrf: window.localStorage.getItem("csrf")
        ? window.localStorage.getItem("csrf")
        : "" || "",
    refreshToken: window.localStorage.getItem("refreshToken")
        ? window.localStorage.getItem("refreshToken")
        : "" || "",
};

export enum ActionTypes {
    LOGIN = "login",
    LOGOUT = "logout",
}
export type AuthAction =
    | {
          type: ActionTypes.LOGIN;
          payload: { jwt: string; csrf: string; refreshToken: string };
      }
    | { type: ActionTypes.LOGOUT };

export const authReducer: Reducer<Auth, AuthAction> = (state, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            window.localStorage.setItem("jwt", action.payload.jwt);
            window.localStorage.setItem("csrf", action.payload.csrf);
            return {
                ...state,
                jwt: action.payload.jwt,
                csrf: action.payload.csrf,
                refreshToken: action.payload.refreshToken,
            };
        }
        case ActionTypes.LOGOUT: {
            window.localStorage.removeItem("jwt");
            window.localStorage.removeItem("csrf");
            return {
                ...state,
                jwt: null,
                csrf: null,
                refreshToken: null,
            };
        }
    }
};
