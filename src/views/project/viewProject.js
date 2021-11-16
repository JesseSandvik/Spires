import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { readProject } from '../../utils/api';

const ViewProject = () => {
    const { project_id } = useParams;

    let initialProjectState = {
        "project_name": "",
        "project_description": "",
        "user_id": 0,
        "created_at": "",
        "updated_at": "",
    };

    const [project, setProject] = useState({...initialProjectState});

    useEffect(() => {
        async function fetchProjectFromApi() {
            try {
                const response = await readProject(project_id);
                setProject(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProjectFromApi();
    }, [project_id]);

    return (
        <section>
            {JSON.stringify(project)}
        </section>
    );
}

export default ViewProject;