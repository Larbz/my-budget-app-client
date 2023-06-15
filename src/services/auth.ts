import axios from "axios";
import { useAuthDispatch } from "../context/Auth";
import { Auth } from "../interfaces/auth";
import { Logout } from "../interfaces/logout";
export const logout = async (): Promise<Logout> => {
    const basePath = `${import.meta.env.VITE_BACKEND_URL_AUTH}`;
    const options = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    const response = await axios.post(`${basePath}/logout`, options);
    // if(response.status===200){
    //     window.localStorage.removeItem("isAuth");
    //     window.localStorage.removeItem("csrf")
    // }
    return response.data;
};

export const updateJWT = async (): Promise<Auth> => {
    const path = `${import.meta.env.VITE_BACKEND_URL_AUTH}/updatejwt`;
    const options = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    const response = await axios.post(path, {}, options);
    return response.data;
};
