import axios from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { LoginForm } from "../styles/components/Form";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export const Login = () => {
    const {authState,setAuth} =useContext(AuthContext);
    const {isAuth}=authState;
    console.log(isAuth);
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    // const [isAuth, setIsAuth] = useState<boolean>(false);
    const [formulario, setFormulario] = useState({
        email: "",
        password: "",
    });

    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/auth/signin", formulario, options);
        if(response){
            console.log(response.headers);
        }
        if (response.status == 200) {
            setAuth(response.headers.authorization,response.data.csrf);
            window.localStorage.setItem("isAuth",response.headers.authorization);
            window.localStorage.setItem("csrf",response.data.csrf);
        } else console.log("wrong credentials");
    };

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value,
        });
    };

    return (
        <>
        {!isAuth?
            <LoginForm onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleChange} id="" />
                <input type="password" name="password" onChange={handleChange} />
                <button type="submit">LogIn</button>
            </LoginForm>
        :<Navigate to="/home"/>}
        </>
    );
};
