import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function Home() {
    const value = useContext(AuthContext);
    return (
        <div>
            <div>Hello</div>
            <button type="submit" onClick={value?.logout} style={{ backgroundColor: '#007FFF' }}>
                Logout
            </button>
        </div>
    );
}
