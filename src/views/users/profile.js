import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { messageByTimeOfDay } from '../../utils/clockGreeting';

const UserProfile = props => {
    const { email, given_name, picture } = props.user;

    return (
        <div>
            <p>{messageByTimeOfDay()} {given_name}!</p>
            <img
                src={picture}
                alt="Profile"
            />
            <small>{email}</small>
        </div>
    );
}

export default withAuthenticationRequired(UserProfile);