import { createContext, useState } from "react";
import { Auth } from "../interfaces/auth";

export type AuthContextProps={
    authState:Auth;
    setAuth:(isAuth:string)=>void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

