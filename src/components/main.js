import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';

import HomePage from '../pages/home';
import Projects from '../pages/projects';
import ProjectById from '../pages/projectById';
import Navigation from './navigation';
import NewProject from '../pages/newProject';
import UserProfile from '../views/users/profile';

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
            
            
        </motion.main>
    );
}

export default Main;