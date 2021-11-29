import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { readTask, updateTask } from '../utils/api';
import TaskForm from '../views/tasks/taskForm';

const UpdateTask = () => {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const { user } = useAuth0();

    const initialTaskState = {
        task_id: 0,
        title: "",
        description: "",
        creator_name: "",
        creator_email: "",
        assigned_name: "",
        assigned_email: "",
        status: "",
        help: false,
        urgency: "",
        due_date: "",
        due_time: "",
        completed: false,
        project_id: 0,
        created_at: "",
        updated_at: "",
    }

    const [task, setTask] = useState({...initialTaskState});
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        const abortController = new AbortController();

        function loadTaskById() {
            readTask(taskId, abortController.signal)
                .then((response) => {
                    setTask({
                        task_id: response.task_id,
                        title: response.title,
                        description: response.description,
                        creator_name: response.creator_name,
                        creator_email: response.creator_email,
                        assigned_name: response.assigned_name,
                        assigned_email: response.assigned_email,
                        status: response.status,
                        help: response.help,
                        urgency: response.urgency,
                        due_date: response.due_date,
                        due_time: response.due_time,
                        completed: response.completed,
                        project_id: response.project_id,
                        created_at: response.created_at,
                        updated_at: response.updated_at,
                    });
                })
                .catch((error) => setError(error));
        }
        loadTaskById();
        return () => abortController.abort();
    }, [taskId]);


    const updateTaskChangeHandler = ({ target }) => {
        setTask({
            ...task,
            [target.name]: target.value,
        });
    }

    const updateTaskCancelHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${task.project_id}`);
    }

    const updateTaskSubmitHandler = (event) => {
        event.preventDefault();
        const updatedTask = {
            ...task,
            creator_name: user.name,
            creator_email: user.email,
            completed: false,
        };
        updateTask(updatedTask, taskId)
            .then(() => navigate(`/projects/${task.project_id}`))
            .catch((error) => setError(error));
        setTask({...initialTaskState})
    }

    function formatDateForUpdateForm(date) {
        const dateArray = [...date];
        const updatedDateArray = [];

        let left = 0;
        let right = 9;

        while (left <= right) {
            updatedDateArray.push(dateArray[left]);
            left++;
        }
        return updatedDateArray.join('');
    }

    return (
        <section className="itemTwo">
            <div className="title">
                <div className="item two">
                    <h2>Edit Task</h2>
                </div>
            </div>
            {error && <p>{error}</p>}
            <TaskForm
                cancelHandler={updateTaskCancelHandler}
                changeHandler={updateTaskChangeHandler}
                formValueOne={task.title}
                formValueTwo={task.description}
                formValueThree={formatDateForUpdateForm(task.due_date)}
                formValueFour={task.due_time}
                submitHandler={updateTaskSubmitHandler}
            />
        </section>
    );
}

export default withAuthenticationRequired(UpdateTask);