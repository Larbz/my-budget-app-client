import { Navigate, Outlet } from "react-router-dom";

import {  LOGIN } from "../config/path";
import { useAuth } from "../context/Auth";

const PrivateRoute = () => {
    const {jwt}=useAuth()
    console.log("private");
    if (!jwt) {
        return <Navigate to={LOGIN} />;
    }
    return <Outlet />;
};

export default PrivateRoute;
