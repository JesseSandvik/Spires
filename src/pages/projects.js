import '../styles/projects/projects.css';
import React, { useEffect, useState } from 'react';
import { listProjects } from '../utils/api';
import Project from '../views/project/project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjectsFromAPI() {
            try {
                const response = await listProjects();
                setProjects(response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjectsFromAPI();
    }, []);

    const projectsList = projects.map((project) => <li key={project.project_id}><Project project={project} /></li>)

    return (
        <section className="item item2">
            <h2>Current Active Projects</h2>
            <div className="projects">
                {projectsList}
            </div>
        </section>
    );
}

export default Projects;