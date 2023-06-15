export interface Auth {
    jwt: string | null;
    csrf: string | null;
    refreshToken:string|null;
}
