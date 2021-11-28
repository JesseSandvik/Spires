import React, { useState } from 'react';
import classNames from '../../utils/ClassNames';

const Task = props => {
    const { task } = props;
    const [taskBody, setTaskBody] = useState("closed");

    const taskBodyToggleHandler = (event) => {
        event.preventDefault();
        if (taskBody === "closed") {
            setTaskBody("open");
        } else {
            setTaskBody("closed");
        }
    }

    return (
        <div className="task">
            <div className="task-title">
                <i className="far fa-caret-square-left"></i>
                <span>
                    <p>{task.title}</p>
                    <i
                        className={classNames({
                            "fas fa-angle-down": taskBody === "closed",
                            "fas fa-angle-down open": taskBody === "open"
                        })}
                        onClick={taskBodyToggleHandler}
                    ></i>
                </span>
                <i className="far fa-caret-square-right"></i>
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