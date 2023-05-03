import axios from "axios"
import { Categorie } from "../interfaces/categories"

export const getCategories=async (token:string):Promise<Categorie[]> =>{
    const options = {
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        withCredentials: true,
    };
    const response = await axios.get(
        "http://localhost:3000/api/categories",
        options
    );
    return response.data;
    
}
