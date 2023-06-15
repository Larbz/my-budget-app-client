import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => useContext(AuthContext).authState;
export const useAuthDispatch = () => useContext(AuthContext).dispatch;
