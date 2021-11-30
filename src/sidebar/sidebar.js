import '../styles/sidebar/sidebar.css';
import React from 'react';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import NavigationSideBar from '../navigation/navigationSideBar';
import UserSideBar from '../views/users/userSideBar';

const SideBar = () => {
    const { user } = useAuth0();

    return (
        <section className="sideBar">
            <UserSideBar
                user={user}
            />
            <NavigationSideBar />
        </section>
    );
}

export default withAuthenticationRequired(SideBar);