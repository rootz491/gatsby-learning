import React from 'react';

export default function ssr({ serverData }) {
    const { name, email, gender } = serverData.results[0]
    return (
        <div style={{
            height: '100vh',
            display: 'grid',
            placeContent: 'center',
            textAlign: 'center',
        }}>
            <p>This is Server-side rendering example!</p>
            <h3>{name.title} {name.first} {name.last}</h3>
            <h5>{email}</h5>
            <p>{gender}</p>
        </div>
    );
}

export async function getServerData() {
    try {
        const res = await fetch('https://randomuser.me/api')
        if (res.ok) {
            return {
                props: await res.json()
            }
        } else {
            throw new Error('Server response not ok')
        }
    } catch (error) {
        console.log(error)
        return {
            props: {},
            headers: {},
            status: 500
        }
    }
}
