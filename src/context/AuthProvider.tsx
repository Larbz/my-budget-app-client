import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { INITIAL_STATE, authReducer } from "./AuthReducer";
interface props {
    children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
    const [authState,dispatch] = useReducer(authReducer, INITIAL_STATE);

    // const setAuth = (isAuth: string,csrf:string) => {
    //     dispatch({ type: "login", payload: {isAuth:isAuth,csrf:csrf}});
    // };

    return <AuthContext.Provider value={{ authState,dispatch}}>{children}</AuthContext.Provider>;
};

// export const useAuth = ()=>useContext(AuthContext).authState
// export const useDispatch = ()=>useContext(AuthContext).dispatch