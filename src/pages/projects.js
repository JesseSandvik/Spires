import '../styles/pages/projects/projects.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { listProjects } from '../utils/api';
import AddButton from '../components/buttons/addButton';
import ErrorAlert from '../layout/errorAlert';
import Project from '../views/projects/project';

const Projects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        const abortController = new AbortController();

        function loadProjects() {
            listProjects(abortController.signal)
                .then((response) => setProjects(response))
                .catch((error) => setError(error));
        }
        loadProjects();
        return () => abortController.abort();
    }, []);

    const addProjectHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/new`);
    }
    
    const projectsList = projects.map((project) => <li key={project.project_id}><Project project={project} /></li>)

    return (
        <section className="projects">
            <div className="projects-title">
                <div className="item item-one">
                    <AddButton
                        itemName={"Project"}
                        addHandler={addProjectHandler}
                    />
                </div>
                <div className="item item-two">
                    <h2>Available Projects</h2>
                </div>
            </div>
            <div className="projects-body">
                <ErrorAlert error={error} />
                {projectsList}
            </div>
        </section>
    );
}

export default withAuthenticationRequired(Projects);