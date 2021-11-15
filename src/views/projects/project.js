import React from 'react';

const Project = props => {
    const { project_name, project_description } = props.project;

    return (
        <div className="project">
            <h4>{project_name}</h4>
            <p>{project_description}</p>
        </div>
    );
}

export default Project;