import '../styles/projects/projects.css';
import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Projects = () => {
    
    //const projectsList = projects.map((project) => <li key={project.project_id}><Project project={project} /></li>)

    return (
        <section className="item item2">
            <h2>Available Projects</h2>
            <div className="projects">
            </div>
        </section>
    );
}

export default withAuthenticationRequired(Projects);