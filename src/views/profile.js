import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const UserProfile = props => {
    const { email, given_name, name, picture } = props.user;

    return (
        <div>
            <p>Welcome, {given_name}!</p>
            <img
                src={picture}
                alt="Profile"
            />
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default withAuthenticationRequired(UserProfile);