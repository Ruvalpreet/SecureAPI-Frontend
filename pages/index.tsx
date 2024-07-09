'use client';
import { useEffect, useState } from "react";
import ChuckNorris from "../components/ChuckNorris";
import LoginForm from "../components/LoginForm";

const Index = () => {

    const [token, setToken] = useState('');
    useEffect(() => {
        console.log("token in index",token);
    }, [token]);
    return (
        <div>
            <LoginForm setToken={setToken} />

            <ChuckNorris token={token} />
        </div>
    )
}

export default Index;