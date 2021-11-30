import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

const Project = props => {
    const navigate = useNavigate();
    const { project } = props;

    const projectClickHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${project.project_id}`);
    }

    return (
        <div
            className="project"
            onClick={projectClickHandler}
        >
            <h5>{project.title}</h5>
            <p>Due By: {formatDate(project.due_date)}</p>
        </div>
    );
}

export default Project;