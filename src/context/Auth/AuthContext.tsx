import { Dispatch, createContext } from "react";
import { Auth } from "../../interfaces/auth";
import { AuthAction } from "./AuthReducer";

export type AuthContextProps = {
    authState: Auth;
    dispatch: Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
