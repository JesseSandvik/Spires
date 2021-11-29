import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { createProject } from '../utils/api';
import CancelButton from '../components/buttons/cancelButton';
import SubmitButton from '../components/buttons/submitButton';

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
            <form onSubmit={createProjectSubmitHandler}>
            <label>Project Title:</label>
            <input
                name="title"
                type="text"
                required
                onChange={createProjectChangeHandler}
                defaultValue=""
            />
            <label>Project Description:</label>
            <textarea
                name="description"
                type="text"
                rows="5" cols="50"
                required
                onChange={createProjectChangeHandler}
                defaultValue=""
            />
            <div className="form-dateTime">
                <div className="item">
                    <label>Project Due Date:</label>
                    <input
                        name="due_date"
                        type="date"
                        required
                        onChange={createProjectChangeHandler}
                        defaultValue=""
                    />
                </div>
                <div className="item">
                    <label>Project Due Time:</label>
                    <input
                        name="due_time"
                        type="time"
                        required
                        onChange={createProjectChangeHandler}
                        defaultValue=""
                    />
                </div>
            </div>
            <div className="form-btns">
                <SubmitButton />
                <CancelButton cancelHandler={createProjectCancelHandler} />
            </div>
        </form>
        </section>
    );
}

export default withAuthenticationRequired(NewProject);