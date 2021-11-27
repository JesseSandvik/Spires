import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { messageByTimeOfDay } from '../../utils/clockGreeting';

const UserProfile = props => {
    const { email, given_name, name, picture } = props.user;

    return (
        <>
            <p>{messageByTimeOfDay()} {given_name}!</p>
            <img
                src={picture}
                alt="Profile"
            />
            <p>{name}</p>
            <p>{email}</p>
        </>
    );
}

export default withAuthenticationRequired(UserProfile);