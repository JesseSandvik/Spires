import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import Navigation from './navigation';
import routes from '../config/routes';
import UserProfile from '../views/user/profile';

const Main = () => {
    const { isAuthenticated, user } = useAuth0();

    const transition = {
        duration: 0.6,
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

    return (
        <motion.main
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
        >
            {isAuthenticated && 
            <div className="item item1">
                <UserProfile user={user} />
                <Navigation />
            </div>}
            <Routes>
              {routes.map((route, index) => {
                return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      element={route.element}
                      render={() => route.element}
                    />
                )
              })}
            </Routes>
        </motion.main>
    );
}

export default Main;