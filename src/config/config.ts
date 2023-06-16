interface Config {
    BACKEND_URL_AUTH: string;
    BACKEND_URL_CATEGORIES: string;
    BACKEND_URL_TRANSACTIONS: string;
    BACKEND_BASE_URL: string;
}

export const config: Config = {
    BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
    BACKEND_URL_AUTH: import.meta.env.VITE_BACKEND_URL_AUTH,
    BACKEND_URL_CATEGORIES: import.meta.env.VITE_BACKEND_URL_CATEGORIES,
    BACKEND_URL_TRANSACTIONS: import.meta.env.VITE_BACKEND_URL_TRANSACTIONS,
};
