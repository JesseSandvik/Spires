import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

const Project = props => {
    const { project } = props;

    return (
        <Link to={`/projects/${project.project_id}`}>
            <h5>{project.title}</h5>
            <small>Due By: {formatDate(project.due_date)}</small>
        </Link>
    );
}

export default Project;