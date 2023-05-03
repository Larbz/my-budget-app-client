import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const INITIAL_STATE = {
    isAuth:window.localStorage.getItem("isAuth")?window.localStorage.getItem("isAuth"):""||"",
};

interface props {
    children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
    const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);

    const setAuth = (isAuth: string) => {
        dispatch({ type: "login", payload: isAuth });
    };

    return <AuthContext.Provider value={{ authState,setAuth }}>{children}</AuthContext.Provider>;
};
