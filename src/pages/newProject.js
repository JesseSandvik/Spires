import React, { useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { createProject } from '../utils/api';
import CancelButton from '../components/buttons/cancelButton';

function NewProject() {
    const { user } = useAuth0();
    const initialProjectState = {
        title: "",
        description: "",
        due_date: "",
        due_time: "",
    }

    const [project, setProject] = useState({...initialProjectState});

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
        console.log('Project Created', project);
        createProject({
            ...project,
            creator_name: user.name,
            creator_email: user.email,
            completed: false,
        });
        setProject({...initialProjectState});
    }
    return (
        <section className="item item2">
            <h2>Create A New Project</h2>
            <small>Project Creator: {user.name}</small>
            <form onSubmit={createProjectSubmitHandler}>
            <label>Project title:</label>
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
            <label>Project Due Date:</label>
                <input
                name="due_date"
                type="date"
                required
                onChange={createProjectChangeHandler}
                defaultValue=""
                />
            <label>Project Due Time:</label>
                <input
                name="due_time"
                type="time"
                required
                onChange={createProjectChangeHandler}
                defaultValue=""
                />
            <br />
            <div>
                <button type="submit">Submit</button>
                <CancelButton cancelHandler={createProjectCancelHandler} />
            </div>
            {console.log(user)}
        </form>
        </section>
    );
}

export default withAuthenticationRequired(NewProject);