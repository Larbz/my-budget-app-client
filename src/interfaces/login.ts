import { AxiosResponse } from "axios";

export interface Login{
    name:string;
    last_name:string;
    Authorization: string;
    csrf: string;
    refreshToken:string;
}