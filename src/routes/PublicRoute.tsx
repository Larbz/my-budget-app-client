import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../config/path";
import { useAuth } from "../context/Auth";

const PublicRoute = () => {
    const {jwt}=useAuth()
    console.log("public");
    if (jwt) {
        return <Navigate to={HOME} />;
    }
    return <Outlet />;
};

export default PublicRoute;
