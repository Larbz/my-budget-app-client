import axios from "axios";
import { config } from "../config/config";
import { Auth } from "../interfaces/auth";
import { Login } from "../interfaces/login";
import { Logout } from "../interfaces/logout";
import { api } from "./api";
import { LoginProps } from "../components/Form/InputComponent";

const basePath = config.BACKEND_URL_AUTH;

export const login = async (body:LoginProps): Promise<Login> => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    const response = await api.post(`${basePath}/signin`,body,options);
    return response.data;
};

export const logout = async (): Promise<Logout> => {
    const options = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    const response = await api.post(`${basePath}/logout`, options);
    // if(response.status===200){
    //     window.localStorage.removeItem("isAuth");
    //     window.localStorage.removeItem("csrf")
    // }

    return response.data;
};

export const updateJWT = async (): Promise<Auth> => {
    const options = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    const response = await axios.post(`${basePath}/updatejwt`, {}, options);
    return response.data;
};
