import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import NewProject from '../pages/newProject';
import NewTask from '../pages/newTask';
import ProjectById from '../pages/projectById';
import Projects from '../pages/projects';
import UpdateProject from '../pages/updateProject';
import UpdateTask from '../pages/updateTask';

const PageRoutes = () => {
    return (
        <Routes>
            <Route
                exact path="/"
                element={<HomePage />}
            />
            <Route
                exact path="/projects/"
                element={<Projects />}
            />
            <Route
                exact path="/projects/:projectId"
                element={<ProjectById />}
            />
            <Route
                exact path="/projects/:projectId/tasks/new"
                element={<NewTask />}
            />
            <Route
                exact path="/projects/:projectId/tasks/:taskId/edit"
                element={<UpdateTask />}
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