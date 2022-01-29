import React from 'react';

export default function NotFound() {
    return (
        <div style={{
            display: 'grid',
            placeContent: 'center',
            height: '100vh',
        }}>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}
