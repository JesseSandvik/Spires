import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Dashboard = () => {

    return (
        <>
            <div className="item item2">
                <h2>Dashboard</h2>
            </div>
        </>
    );
}

export default withAuthenticationRequired(Dashboard);