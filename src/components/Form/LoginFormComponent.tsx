import axios from "axios";
import { useState } from "react";
import { useAuthDispatch } from "../../context/Auth";
import { ActionTypes } from "../../context/Auth/AuthReducer";
import { Button, FormTitle, LoginForm } from "../../styles/components/Form";
import { InputComponent, LoginProps } from "./InputComponent";
import { api } from "../../services/api";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../config/path";
import { useMutation } from "@tanstack/react-query";

export const LoginFormComponent = () => {
    const [formulario, setFormulario] = useState<LoginProps>({} as LoginProps);
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const {mutate}=useMutation(login,{
        onSuccess:(data)=>{
            dispatch({
                type: ActionTypes.LOGIN,
                payload: {
                    jwt: data.Authorization,
                    csrf: data.csrf,
                    refreshToken:data.refreshToken
                },
            });
            navigate(HOME)
        },
        onError:(data)=>{
            console.log(data)
        }
        
    });



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // const response = await api.post(
        //     "auth/signin",
        //     formulario,
        //     options
        // );
        // const response = await login(formulario);
        mutate(formulario);
        // if (isSuccess) {
        //     console.log("Asd")
        //     // dispatch({
        //     //     type: ActionTypes.LOGIN,
        //     //     payload: {
        //     //         jwt: response.Authorization,
        //     //         csrf: response.csrf,
        //     //         refreshToken:response.refreshToken
        //     //     },
        //     // });
        //     // navigate(HOME)
        // } else console.log("wrong credentials");
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
