import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { BASE, LOGIN } from "../config/path";
import { AuthContext } from "../context/AuthContext";


const PrivateRoute = () => {
  const {authState} =useContext(AuthContext);
  const {isAuth}=authState;
  console.log(isAuth)
  console.log("private")
  if (!isAuth) {
    console.log("none")
    return <Navigate to={BASE} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
