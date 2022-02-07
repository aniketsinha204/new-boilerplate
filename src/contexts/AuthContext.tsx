/* eslint-disable no-unused-vars */
import React, { createContext, useMemo, useState } from 'react';
import { userService } from '../services/UserService';

interface IAuth {
    token: string;
    isAuthenticated: boolean;
}

interface IAuthContext {
    auth: IAuth;
    setAuth: (state: IAuth) => void;
    login: (email: string, password: string) => void;
    logout: () => void;
}

interface IAuthProvider {
    children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider(props: IAuthProvider) {
    const [auth, setAuth] = useState(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            return {
                token: savedToken,
                isAuthenticated: true,
            };
        }
        return {
            token: '',
            isAuthenticated: false,
        };
    });

    const login = async (email: string, password: string) => {
        const response = await userService.signin(email, password);
        console.log('===========', response);
        if (response.data?.token) {
            setAuth({
                token: response.data.token,
                isAuthenticated: true,
            });
            localStorage.setItem('token', response.data.token);
        } else {
            setAuth({
                token: '',
                isAuthenticated: false,
            });
            localStorage.removeItem('token');
        }
    };

    const logout = () => {
        setAuth({
            token: '',
            isAuthenticated: false,
        });
        localStorage.removeItem('token');
    };

    const value = useMemo(
        () => ({
            auth,
            setAuth,
            login,
            logout,
        }),
        [auth, setAuth, login, logout]
    );

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}
