import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const value = useContext(AuthContext);
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        value?.login(email, password);
    };

    return (
        <>
            <h1>Login</h1>
            <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                placeholder="Enter Email"
            />
            <br />
            <br />
            <input
                type="text"
                name="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                value={password}
                placeholder="Enter Password"
            />
            <br />
            <br />
            <button type="submit" onClick={handleLogin} style={{ backgroundColor: '#007FFF' }}>
                Submit
            </button>
        </>
    );
}

export default Login;
