import axios from "axios";
import { useState } from "react";
import { useAuthDispatch } from "../../context/Auth";
import { ActionTypes } from "../../context/Auth/AuthReducer";
import { Button, FormTitle, LoginForm } from "../../styles/components/Form";
import { InputComponent, LoginProps } from "./InputComponent";

export const LoginFormComponent = () => {
    const [formulario, setFormulario] = useState<LoginProps>({} as LoginProps);
    const dispatch = useAuthDispatch();

    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post(
            "http://localhost:3000/api/auth/signin",
            formulario,
            options
        );
        if (response) {
            console.log(response.headers);
        }
        if (response.status == 200) {
            // setAuth(response.headers.authorization,response.data.csrf);
            dispatch({
                type: ActionTypes.LOGIN,
                payload: {
                    jwt: response.data.Authorization,
                    csrf: response.data.csrf,
                },
            });
        } else console.log("wrong credentials");
    };

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i as unknown as string;
    const passwordRegex = /\d{8,}/ as unknown as string;

    return (
        <>
            <LoginForm onSubmit={handleSubmit}>
                <FormTitle>Sign In</FormTitle>
                <InputComponent
                    type="email"
                    name="email"
                    state={formulario.email}
                    updateState={setFormulario}
                    pattern={emailRegex}
                    placeholder="Inserte Email"
                    label="Email:"
                />
                <InputComponent
                    type="password"
                    name="password"
                    state={formulario.password}
                    updateState={setFormulario}
                    pattern={passwordRegex}
                    placeholder="Inserte Contraseña"
                    label="Password:"
                />
                <Button type="submit" onClick={handleSubmit}>
                    Log In
                </Button>
            </LoginForm>
        </>
    );
};
