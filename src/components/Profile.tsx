import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BASE } from "../config/path";
import { AuthContext } from "../context/Auth/AuthContext";
import { Logout } from "../interfaces/logout";
import { logout } from "../services/auth";

interface IProfile {
    username: string;
    name: string;
    last_name: string;
    dni: string;
    email: string;
}

export const Profile = () => {
    const { authState } = useContext(AuthContext);
    const { jwt, csrf } = authState;
    const [log, setLog] = useState<Logout>();
    const [profile, setProfile] = useState<IProfile>();
    const getProfileInfo = async () => {
        const options = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
                CSRF: csrf,
            },
            withCredentials: true,
        };
        const response = await axios.get(
            "http://localhost:3000/api/auth/profile",
            options
        );
        setProfile(response.data.user);
    };

    const handleLogout = () => {
        logout().then((res) => {
            setLog(res);
        });
    };

    useEffect(() => {
        getProfileInfo();
    }, []);

    return (
        <div>
            <Link to={BASE} onClick={handleLogout}>
                logout
            </Link>
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
