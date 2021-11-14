import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from '../views/dashboard';
import UserProfile from '../views/profile';

const HomePage = () => {
    const { isAuthenticated, user } = useAuth0();

    if (isAuthenticated) {
        return (
            <>
                <div className="item item1">
                    <UserProfile user={user} />
                </div>
                <div className="item item2">
                    <Dashboard />
                </div>
            </>
        );
    } else {
        return <h2>Welcome to Froggy!</h2>
    }
}

export default HomePage;