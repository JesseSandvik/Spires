import React from 'react';
import { messageByTimeOfDay } from '../../utils/clockGreeting';

const UserSideBar = props => {
    const { given_name, picture } = props.user;

    return (
        <div className="sideBar-user">
            <p>{messageByTimeOfDay()} {given_name}!</p>
            <img
                src={picture}
                alt="Profile"
            />
        </div>
    );
}

export default UserSideBar;