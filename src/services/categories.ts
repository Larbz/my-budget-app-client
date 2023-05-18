import axios from "axios"
import { Category } from "../interfaces/categories"

export const getCategories=async (token:string|null,csrf:string|null):Promise<Category[]> =>{
    const basePath=`${import.meta.env.VITE_BACKEND_URL_CATEGORIES}`
    const options = {
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            CSRF:csrf
        },
        withCredentials: true,
    };
    const response = await axios.get(
        `${basePath}`,
        options
    );
    return response.data;
    
}
