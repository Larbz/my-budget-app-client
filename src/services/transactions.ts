import axios from "axios";
import { TransactionResponse } from "../interfaces/transaction";

export const getTransactions=async (token:string|null,csrf:string|null,page?:number):Promise<TransactionResponse> =>{
    const basePath=`${import.meta.env.VITE_BACKEND_URL_TRANSACTIONS}/filters?page=${page}&limit=60`
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
