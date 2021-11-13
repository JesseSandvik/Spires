import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const UserProfile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    return (
        <div>
            <img src={picture} alt="Profile" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{JSON.stringify(user)}</p>
        </div>
    );
}

export default withAuthenticationRequired(UserProfile);