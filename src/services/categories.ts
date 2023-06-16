import axios from "axios"
import { Category } from "../interfaces/categories"
import { config } from "../config/config"
import { api } from "./api"
const basePath = config.BACKEND_URL_CATEGORIES
export const getCategories=async (token:string|null,csrf:string|null):Promise<Category[]> =>{
    const options = {
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            CSRF:csrf
        },
        withCredentials: true,
    };
    const response = await api.get(
        `${basePath}`,
        options
    );
    return response.data;
    
}
