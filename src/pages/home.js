import '../styles/pages/home/home.css';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import classNames from '../utils/ClassNames';

const HomePage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <section className={classNames({
            "home welcome": !isAuthenticated,
            "home auth": isAuthenticated
        })}
        >
            <div className="home-intro">
                <h2><strong>Spires</strong> is a workflow & communcation tool.</h2>
                <p><b>Together</b>, we can achieve new heights.</p>
                <h3>Let's build something great.</h3>
            </div>
        </section>
    );
}

export default HomePage;