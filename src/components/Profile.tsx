import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../services/auth";
import { Logout } from "../interfaces/logout";
import { Link, Navigate } from "react-router-dom";
import { BASE } from "../config/path";

interface IProfile {
    username: string;
    name: string;
    last_name: string;
    dni: string;
    email: string;
}

export const Profile = () => {
    const { authState, setAuth } = useContext(AuthContext);
    const { isAuth,csrf } = authState;
    const [log,setLog]=useState<Logout>();
    const [profile, setProfile] = useState<IProfile>();
    const getProfileInfo = async () => {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${isAuth}`,
                "CSRF":csrf
            },
            withCredentials: true,
        };
        const response = await axios.get(
            "http://localhost:3000/api/auth/profile",
            options
        );
        setProfile(response.data.user);
    };

    const handleLogout=()=>{
        logout(isAuth,csrf).then(res=>{setLog(res);setAuth("","")});
    }

    useEffect(() => {
        getProfileInfo();
    }, []);
    
    return (
        <div>
            <Link to={BASE} onClick={handleLogout}>logout</Link>
            <h1>Hola {profile?.name}!</h1>
            <ul>
                <li>{profile?.username}</li>
                <li>{profile?.name}</li>
                <li>{profile?.last_name}</li>
                <li>{profile?.dni}</li>
                <li>{profile?.email}</li>
            </ul>
        </div>
    );
};
