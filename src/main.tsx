import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import "./index.css";
import { Main } from "./styles/components/Basic.ts";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
            <Main>
                <App/>
            </Main>
        </BrowserRouter>
    </AuthProvider>
    </React.StrictMode>
);
