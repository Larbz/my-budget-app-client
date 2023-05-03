import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HOME } from "../config/path";

const PublicRoute = () => {
  const {authState} =useContext(AuthContext);
  const {isAuth}=authState;

  if (isAuth) {
    return <Navigate to={HOME} />;
  }

  return <Outlet/>;
};

export default PublicRoute;
