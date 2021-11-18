import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProjectById = props => {
    const { projects } = props;
    const { projectId } = useParams();
    const [project, setProject] = useState({});


    useEffect(() => {
        function findProjectByMatchingId() {
            const projectWithMatchingId = projects.find((project) => project.project_id === Number(projectId));
            setProject(projectWithMatchingId);
        }
        findProjectByMatchingId();
    }, [projects, projectId]);

    if (project) {
        return (
            <>
                <section className="item item2">
                    <h2>{project.project_name}</h2>
                </section>
            </>
        );
    } else {
        return <h2>There is currently no project {projectId}.</h2>
    }
}

export default withAuthenticationRequired(ProjectById);