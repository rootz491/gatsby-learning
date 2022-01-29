import React from 'react';
import LoginButton from './LoginBtn';

export default function Login() {
    return (
        <div style={{
            display: 'grid',
            placeContent: 'center',
            height: '100vh'
        }}>
            <h1>Authenticate Yourself!</h1>
            <LoginButton />
        </div>
    );  
}