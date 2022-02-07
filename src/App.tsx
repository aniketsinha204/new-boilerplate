import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthContext';
import Login from './components/Login';
import { Home } from './components/Home';
import { Second } from './components/Second';

function App() {
    const value = useContext(AuthContext);
    const auth = value?.auth;

    let routes = (
        <Routes>
            {/* Unauthenticated Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate replace to="/login" />} />
        </Routes>
    );

    if (auth?.isAuthenticated) {
        routes = (
            <Routes>
                {/* Authenticated Routes */}
                <Route path="/home" element={<Home />} />
                <Route path="/second" element={<Second />} />
                <Route path="/*" element={<Navigate replace to="/home" />} />
            </Routes>
        );
    }

    return (
        <div className="App">
            <BrowserRouter>{routes}</BrowserRouter>
        </div>
    );
}

export default App;
