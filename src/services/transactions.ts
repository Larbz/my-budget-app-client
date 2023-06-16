import axios from "axios";
import { TransactionResponse } from "../interfaces/transaction";
import { config } from "../config/config";
import { api } from "./api";
const basePath = config.BACKEND_URL_TRANSACTIONS
export const getTransactions=async (token:string|null,csrf:string|null,filters?:string):Promise<TransactionResponse> =>{
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
        `${basePath}/filters?${filters}`,
        options
    );
    // const response = await api.get(
    //     `${basePath}/filters?page=${page}&limit=60`,
    //     options
    // );
    return response.data;
}
