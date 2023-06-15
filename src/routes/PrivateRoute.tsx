import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { BASE, LOGIN } from "../config/path";
import { AuthContext } from "../context/Auth/AuthContext";

const PrivateRoute = () => {
    const { authState } = useContext(AuthContext);
    const { jwt } = authState;
    console.log("private");
    if (!jwt) {
        return <Navigate to={LOGIN} />;
    }
    return <Outlet />;
};

export default PrivateRoute;
