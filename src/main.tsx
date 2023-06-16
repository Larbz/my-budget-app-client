import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./context/Auth/AuthProvider.tsx";
import "./index.css";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <BrowserRouter>
                        <App />
                    <ReactQueryDevtools />
                </BrowserRouter>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
