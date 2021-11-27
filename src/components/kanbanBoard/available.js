import React from 'react';
import Task from '../../views/tasks/task';

const Available = props => {
    const { tasks } = props;

    const availableTasks = tasks.filter((task) => task.status === "available");
    const availableTaskList = availableTasks.map((task) => <li key={task.task_id}><Task task={task} /></li>);

    return (
        <div className="item">
            <h3>Available</h3>
            <ul>{availableTaskList}</ul>
        </div>
    );
}

export default Available;