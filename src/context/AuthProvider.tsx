import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const INITIAL_STATE = {
    isAuth:window.localStorage.getItem("isAuth")?window.localStorage.getItem("isAuth"):""||"",
    csrf:window.localStorage.getItem("csrf")?window.localStorage.getItem("csrf"):""||""
};

interface props {
    children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
    const [authState,dispatch] = useReducer(authReducer, INITIAL_STATE);

    const setAuth = (isAuth: string,csrf:string) => {
        dispatch({ type: "login", payload: {isAuth:isAuth,csrf:csrf}});
    };


    return <AuthContext.Provider value={{ authState,setAuth}}>{children}</AuthContext.Provider>;
};
