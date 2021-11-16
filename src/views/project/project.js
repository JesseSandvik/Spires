import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = props => {
    const navigate = useNavigate();
    const { project_id, project_name, project_description } = props.project;

    const projectViewButtonHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${project_id}`);
    }

    return (
        <button
            className="project"
            onClick={projectViewButtonHandler}
        >
            <h4>{project_name}</h4>
            <p>{project_description}</p>
        </button>
    );
}

export default Project;