import React from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from '../views/dashboard';
import UserProfile from '../views/users/profile';
import Loading from '../components/loading';

const HomePage = () => {
    const { isAuthenticated, isLoading, user } = useAuth0();

    const transition = {
        ease: [1.0, 0.01, -0.05, 0.9],
    };
    
    const initialMotion = {
        opacity: 0,
    };

    const animateMotion = {
        opacity: 1,
    };

    const exitMotion = {
        opacity: 0,
    };

    if (isAuthenticated) {
        return (
            <>
                <div className="item item1">
                    <UserProfile user={user}/>
                </div>
                <div className="item item2">
                    <Dashboard />
                </div>
            </>
        );
    } else if (isLoading) {
        return (<motion.div
                    className="loading"
                    initial={initialMotion}
                    animate={animateMotion}
                    exit={exitMotion}
                    transition={transition}
                >
                    <Loading />
                </motion.div>);
    } else {
        return (
            <motion.div
                className="non-auth"
                initial={initialMotion}
                animate={animateMotion}
                exit={exitMotion}
                transition={transition}
            >
                <div className="intro">
                    <h2>Froggy is a bug tracking & development workflow tool.</h2>
                    <p>Catch bugs. Swim toward success.</p>
                    <h3>Let's build something great together.</h3>
                </div>
            </motion.div>
        );
    }
}

export default HomePage;