import { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { LoginFormComponent } from "./Form/LoginFormComponent";

export const Login = () => {
    const { authState } = useContext(AuthContext);
    const { jwt, csrf } = authState;
    console.log(jwt);

    return (
        <>
            <LoginFormComponent />
        </>
    );
};
