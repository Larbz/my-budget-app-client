import axios from "axios";
import { Logout } from "../interfaces/logout";


export const logout = async (token: string): Promise<Logout> => {
    const options = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    };
    const response = await axios.post("http://localhost:3000/api/auth/logout", options);
    if(response.status===200){
        window.localStorage.removeItem("isAuth");
    }
    return response.data;
};
