import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask, updateTaskStatus } from '../../utils/api';
import classNames from '../../utils/ClassNames';
import DeleteButton from '../../components/buttons/deleteButton';
import ErrorAlert from '../../layout/errorAlert';
import ExpandButton from '../../components/buttons/expandButton';
import LeftButton from '../../components/buttons/leftButton';
import RightButton from '../../components/buttons/rightButton';
import UpdateButton from '../../components/buttons/updateButton';

const Task = props => {
    const navigate = useNavigate();
    const { task } = props;

    const [currentTask, setCurrentTask] = useState(task);
    const [error, setError] = useState(null);
    const [taskBody, setTaskBody] = useState("closed");

    const taskCompressHandler = (event) => {
        event.preventDefault();
        if (taskBody === "open") {
            setTaskBody("closed");
        }
    }

    const taskExpandHandler = (event) => {
        event.preventDefault();
        if (taskBody === "closed") {
            setTaskBody("open");
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

    const deleteTaskHandler = (event) => {
        event.preventDefault();
        setError(null);
        const confirmDelete = window.confirm("Are you sure you want to delete this project? It cannot be recovered.");

        if (confirmDelete) {
            deleteTask(task.task_id)
                .then(() => navigate(0))
                .catch((error) => setError(error));
        }
    }

    return (
        <div className="task">
            <div className="task-title">
                <LeftButton
                    leftHandler={moveTaskToTheLeft}
                />
                <span>
                    <ErrorAlert error={error} />
                    <p>{task.title}</p>
                </span>
                <RightButton
                    rightHandler={moveTaskToTheRight}
                />
            </div>
            <div className={classNames({
                "task-body": taskBody === "closed",
                "task-body open": taskBody === "open"
            })}
            >
                {taskBody === "open" && (
                    <div
                        className="modal"
                        onClick={taskCompressHandler}
                    >
                        <div className="modal-body">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <div className="btn-group">
                                <UpdateButton
                                    itemName={"Task"}
                                    updateHandler={updateTaskHandler}
                                />
                                <DeleteButton
                                    itemName={"Task"}
                                    deleteHandler={deleteTaskHandler}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {taskBody === "closed" && (
                    <>
                        <small>{task.description}</small>
                        <ExpandButton
                            expandHandler={taskExpandHandler}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Task;