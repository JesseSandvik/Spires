import React from 'react';
import Task from '../../views/tasks/task';

const InProgress = props => {
    const { tasks } = props;

    const inProgressTasks = tasks.filter((task) => task.status === "in progress");
    const inProgressTaskList = inProgressTasks.map((task) => <li key={task.task_id}><Task task={task} /></li>);

    return (
        <div className="item">
            <h3>In Progress</h3>
            <ul>{inProgressTaskList}</ul>
        </div>
    );
}

export default InProgress;