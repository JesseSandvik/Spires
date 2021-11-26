import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { readProject } from '../utils/api';

const ProjectById = () => {
    const { projectId } = useParams();

    const [project, setProject] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        const abortController = new AbortController();

        function loadProjectById() {
            readProject(projectId, abortController.signal)
                .then((response) => setProject(response))
                .catch((error) => setError(error));
        }
        loadProjectById();
        return () => abortController.abort();
    }, [projectId]);

    return (
         <section className="item item2">
            <div className="heading">
                <h2>{project.title}</h2>
            </div>
            <div>
            </div>
        </section>
    );
}

export default withAuthenticationRequired(ProjectById);