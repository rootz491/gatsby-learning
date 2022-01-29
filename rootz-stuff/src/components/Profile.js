import React from 'react';
import { getProfile } from "../utils/auth0";

export default function Profile() {
    const user = getProfile();

    return (
        <div>
            <h1>Profile</h1>
            <p>{user.name}</p>
        </div>
    );
}
