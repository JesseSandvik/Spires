import '../../styles/projects/projects.css';
import React, { useEffect, useState } from 'react';
import { listProjects } from '../../utils/api';
import Project from './project';

const ProjectsList = () => {
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
    }, [projects])

    const projectsList = projects.map((project) => <li key={project.project_id}><Project project={project} /></li>)

    return (
        <section className="projectsList">
            <h3>Current Active Projects</h3>
            {projectsList}
        </section>
    );
}

export default ProjectsList;