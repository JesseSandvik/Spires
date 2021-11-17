import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProjectById = props => {
    const { projects } = props;
    const { id } = useParams();
    const [currentProject, setCurrentProject] = useState({});

    useEffect(() => {
        setCurrentProject({});

        const projectFromParams = projects.find((project) => project.project_id === Number(id));
        setCurrentProject(projectFromParams);
    }, [projects, id]);

    return (
        <>
            <section className="item item2">
                <h2>{currentProject.project_name}</h2>
            </section>
        </>
    );
}

export default withAuthenticationRequired(ProjectById);