import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTaskStatus } from '../../utils/api';
import ErrorAlert from '../../layout/errorAlert';
import classNames from '../../utils/ClassNames';
import UpdateButton from '../../components/buttons/updateButton';

const Task = props => {
    const navigate = useNavigate();
    const { task } = props;

    const [currentTask, setCurrentTask] = useState(task);
    const [error, setError] = useState(null);
    const [taskBody, setTaskBody] = useState("closed");

    const taskBodyToggleHandler = (event) => {
        event.preventDefault();
        if (taskBody === "closed") {
            setTaskBody("open");
        } else {
            setTaskBody("closed");
        }
    }

    const moveTaskToTheLeft = (event) => {
        event.preventDefault();
        setError(null);
        if (currentTask.status === "completed") {
            updateTaskStatus({ status: "in progress" }, currentTask.task_id)
                .then((response) => setCurrentTask(response))
                .then(() => navigate(0))
                .catch((error) => setError(error));
        } else if (currentTask.status === "in progress") {
            updateTaskStatus({ status: "available" }, currentTask.task_id)
                .then((response) => setCurrentTask(response))
                .then(() => navigate(0))
                .catch((error) => setError(error));
        }
    }

    const moveTaskToTheRight = (event) => {
        event.preventDefault();
        setError(null);
        if (currentTask.status === "available") {
            updateTaskStatus({ status: "in progress" }, currentTask.task_id)
                .then((response) => setCurrentTask(response))
                .then(() => navigate(0))
                .catch((error) => setError(error));
        } else if (currentTask.status === "in progress") {
            updateTaskStatus({ status: "completed" }, currentTask.task_id)
                .then((response) => setCurrentTask(response))
                .then(() => navigate(0))
                .catch((error) => setError(error));
        }
    }

    const updateTaskHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${task.project_id}/tasks/${task.task_id}/edit`);
    }

    return (
        <div className="task">
            <div className="task-title">
                <i
                    className="far fa-caret-square-left"
                    onClick={moveTaskToTheLeft}
                ></i>
                <span>
                    <ErrorAlert error={error} />
                    <p>{task.title}</p>
                    {taskBody === "open" && (
                        <UpdateButton
                            itemName={"Task"}
                            updateHandler={updateTaskHandler}
                        />
                    )}
                    <i
                        className={classNames({
                            "fas fa-angle-down": taskBody === "closed",
                            "fas fa-angle-down open": taskBody === "open"
                        })}
                        onClick={taskBodyToggleHandler}
                    ></i>
                </span>
                <i
                    className="far fa-caret-square-right"
                    onClick={moveTaskToTheRight}
                ></i>
            </div>
            <div className={classNames({
                "task-body": taskBody === "closed",
                "task-body open": taskBody === "open"
            })}>
                <p>{task.description}</p>
            </div>
        </div>
    );
}

export default Task;