import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import NewProject from '../pages/newProject';
import ProjectById from '../pages/projectById';
import Projects from '../pages/projects';
import UpdateProject from '../pages/updateProject';

const PageRoutes = () => {
    return (
        <Routes>
            <Route
                exact path="/"
                element={<HomePage />}
            />
            <Route
                exact path="/projects"
                element={<Projects />}
            />
            <Route
                exact path="/projects/:projectId"
                element={<ProjectById />}
            />
            <Route
                exact path="/projects/:projectId/edit"
                element={<UpdateProject />}
            />
            <Route
                exact path="/projects/new"
                element={<NewProject />}
            />
        </Routes>
    );
}

export default PageRoutes;