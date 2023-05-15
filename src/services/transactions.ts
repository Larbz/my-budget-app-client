import axios from "axios"
import { Transaction } from "../interfaces/transaction"

export const getTransactions=async (token:string,csrf:string):Promise<Transaction[]> =>{
    const basePath=`${import.meta.env.VITE_BACKEND_URL_TRANSACTIONS}`
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
