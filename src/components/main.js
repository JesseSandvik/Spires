import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import { listProjects } from '../utils/api';

import HomePage from '../pages/home';
import Projects from '../pages/projects';
import ProjectById from '../pages/projectById';
import Navigation from './navigation';
import UserProfile from '../views/user/profile';

const Main = () => {
    const { isAuthenticated, user } = useAuth0();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([]);
        const abortController = new AbortController();

        async function fetchProjectsFromAPI() {
            try {
                const response = await listProjects(abortController.signal);
                setProjects(response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjectsFromAPI();
        return () => abortController.abort();
    }, []);

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
                    <Route
                      path="/"
                      exact={true}
                      element={<HomePage />}
                    />
                    <Route
                      path="/projects"
                      exact={true}
                      element={<Projects projects={projects} />}
                    />
                    <Route
                      path="/projects/:id"
                      exact={true}
                      element={<ProjectById projects={projects} />}
                    />
            </Routes>
        </motion.main>
    );
}

export default Main;