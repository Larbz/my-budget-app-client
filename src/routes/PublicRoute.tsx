import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../config/path";
import { AuthContext } from "../context/Auth/AuthContext";

const PublicRoute = () => {
    const { authState } = useContext(AuthContext);
    const { jwt } = authState;
    console.log("public");
    if (jwt) {
        return <Navigate to={HOME} />;
    }
    return <Outlet />;
};

export default PublicRoute;
