import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from '../views/dashboard';
import UserProfile from '../views/profile';
import Loading from '../components/loading';

const HomePage = () => {
    const { isAuthenticated, isLoading, user } = useAuth0();

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
    } else if (isLoading) {
        return (<div className="loading">
                    <Loading />
                </div>);
    } else {
        return (
            <div className="non-auth">
                <div className="intro">
                    <h2>Froggy is a bug tracking & development workflow tool.</h2>
                    <p>Catch bugs. Swim toward success.</p>
                    <h3>Let's build something great together.</h3>
                </div>
            </div>
        );
    }
}

export default HomePage;