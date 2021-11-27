import '../styles/projects/projects.css';
import React, { useEffect, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { listProjects } from '../utils/api';
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
        <section className="item item2">
            <h2>Available Projects</h2>
            <div className="projects">
                {error && <p>{error}</p>}
                {projectsList}
            </div>
        </section>
    );
}

export default withAuthenticationRequired(Projects);