import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from '../views/dashboard';

const HomePage = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <div>
            {isAuthenticated && (
                <Dashboard user={user} />
            )}
        </div>
    );
}

export default HomePage;