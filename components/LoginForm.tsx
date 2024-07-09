'use client';

import { useState } from 'react';
import Auth from '../utils/auth';

export default function LoginForm({setToken}: any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login,setLogin] = useState(false);
    const [response, setResponse] = useState('');
    
    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault(); Auth(username, password, setToken,setLogin,setResponse)}}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {login === true ? <button >refresh</button> : <button type="submit" >login</button>}
                <div>{response}</div>
            </form>
        </div>
    );  
}