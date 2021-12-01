import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { createTask } from '../utils/api';
import CancelButton from '../components/buttons/cancelButton';
import ErrorAlert from '../layout/errorAlert';
import TaskForm from '../views/tasks/taskForm';

const NewTask = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const { user } = useAuth0();

    const initialTaskState = {
        title: "",
        description: "",
        due_date: "",
        due_time: "",
    }

    const [task, setTask] = useState({...initialTaskState});
    const [error, setError] = useState(null);

    const createTaskChangeHandler = ({ target }) => {
        setTask({
            ...task,
            [target.name]: target.value,
        });
    }

    const createTaskCancelHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${projectId}`);
    }

    const createTaskSubmitHandler = (event) => {
        event.preventDefault();
        createTask({
            ...task,
            assigned_name: "",
            assigned_email: "",
            completed: false,
            creator_name: user.name,
            creator_email: user.email,
            help: false,
            project_id: projectId,
            status: "available",
            urgency: "green",
        })
            .then(() => navigate(`/projects/${projectId}`))
            .catch((error) => setError(error));
        setTask({...initialTaskState})
    }

    return (
        <section className="projects">
            <div className="projects-title">
                <div className="item item-one">
                    <CancelButton
                        cancelHandler={createTaskCancelHandler}
                    />
                </div>
                <div className="item item-two">
                    <h2>Create A New Task</h2>
                </div>
            </div>
            <div className="projects-form">
                <ErrorAlert error={error} />
                <TaskForm
                    cancelHandler={createTaskCancelHandler}
                    changeHandler={createTaskChangeHandler}
                    submitHandler={createTaskSubmitHandler}
                />
            </div>
        </section>
    );
}

export default withAuthenticationRequired(NewTask);