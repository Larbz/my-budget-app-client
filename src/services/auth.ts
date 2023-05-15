import axios from "axios";
import { Logout } from "../interfaces/logout";
export const logout = async (token: string,csrf:string): Promise<Logout> => {
    const basePath=`${import.meta.env.VITE_BACKEND_URL_AUTH}`
    const options = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            CSRF:csrf
        },
        withCredentials: true,
    };
    const response = await axios.post(`${basePath}/logout`, options);
    if(response.status===200){
        window.localStorage.removeItem("isAuth");
        window.localStorage.removeItem("csrf")
    }
    return response.data;
};
