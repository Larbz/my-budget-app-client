import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { BASE, LOGIN } from "../config/path";
import { AuthContext } from "../context/AuthContext";


const PrivateRoute = () => {
  const {authState} =useContext(AuthContext);
  const {isAuth}=authState;
  
  if (!isAuth) {
    return <Navigate to={BASE} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
