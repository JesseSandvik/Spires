import '../styles/pages/projects/projects.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { listProjects } from '../utils/api';
import ErrorAlert from '../layout/errorAlert';
import Project from '../views/projects/project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        const abortController = new AbortController();

        function loadProjects() {
            listProjects(abortController.signal)
                .then((response) => setProjects(response))
                .catch((error) => setError(error));
        }
        loadProjects();
        return () => abortController.abort();
    }, []);
    
    const projectsList = projects.map((project) => <li key={project.project_id}><Project project={project} /></li>)

    return (
        <section className="projects">
            <div className="projects-title">
                <div className="item item-one">
                    <Link to="/projects/new">
                        <i className="fas fa-plus-square"></i>
                        <small>Add Project</small>
                    </Link>
                </div>
                <div className="item item-two">
                    <h2>Available Projects</h2>
                </div>
            </div>
            <div className="projects-body">
                <ErrorAlert error={error} />
                {projectsList}
            </div>
        </section>
    );
}

export default withAuthenticationRequired(Projects);