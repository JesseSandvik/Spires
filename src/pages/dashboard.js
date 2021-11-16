import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Dashboard = () => {

    return (
        <>
            <section className="item item2">
                <h2>Dashboard</h2>
            </section>
        </>
    );
}

export default withAuthenticationRequired(Dashboard);