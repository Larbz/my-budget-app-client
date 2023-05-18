import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export const useAuth = ()=>useContext(AuthContext).authState
export const useDispatch = ()=>useContext(AuthContext).dispatch