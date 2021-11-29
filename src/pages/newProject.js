import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { createProject } from '../utils/api';
import ProjectForm from '../views/projects/projectForm';

const NewProject = () => {
    const navigate = useNavigate();

    const { user } = useAuth0();
    const initialProjectState = {
        title: "",
        description: "",
        due_date: "",
        due_time: "",
    }

    const [project, setProject] = useState({...initialProjectState});
    const [error, setError] = useState(null);

    const createProjectChangeHandler = ({ target }) => {
        setProject({
            ...project,
            [target.name]: target.value,
        });
    }

    const createProjectCancelHandler = (event) => {
        event.preventDefault();
        navigate("/projects");
    }

    const createProjectSubmitHandler = (event) => {
        event.preventDefault();
        createProject({
            ...project,
            creator_name: user.name,
            creator_email: user.email,
            completed: false,
        })
            .then((createdProject) => navigate(`/projects/${createdProject.project_id}`))
            .catch((error) => setError(error));
        setProject({...initialProjectState})
    }
    return (
        <section className="itemTwo">
            <div className="title">
                <div className="item two">
                    <h2>Create A New Project</h2>
                </div>
            </div>
            {error && <p>{error}</p>}
            <ProjectForm
                cancelHandler={createProjectCancelHandler}
                changeHandler={createProjectChangeHandler}
                submitHandler={createProjectSubmitHandler}
            />
        </section>
    );
}

export default withAuthenticationRequired(NewProject);