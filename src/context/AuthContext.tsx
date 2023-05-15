import { createContext } from "react";
import { Auth } from "../interfaces/auth";

export type AuthContextProps={
    authState:Auth;
    setAuth:(isAuth:string,csrf:string)=>void;
    // setCsrf:(csrf:string)=>void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

