import React from 'react';
import Task from '../../views/tasks/task';

const Completed = props => {
    const { tasks } = props;

    const completedTasks = tasks.filter((task) => task.status === "completed");
    const completedTaskList = completedTasks.map((task) => <li key={task.task_id}><Task task={task} /></li>);

    return (
        <div className="item">
            <div className="item-title">
                <h3>Completed</h3>
            </div>
            <ul>{completedTaskList}</ul>
        </div>
    );
}

export default Completed;