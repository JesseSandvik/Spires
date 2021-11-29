import React from 'react';
import Task from '../../views/tasks/task';

const Available = props => {
    const { tasks } = props;

    const availableTaskList = tasks.map((task) => <li key={task.task_id}><Task task={task} /></li>);

    return (
        <div className="item">
            <div className="item-title">
                <h3>Available</h3>
            </div>
            <ul>{availableTaskList}</ul>
        </div>
    );
}

export default Available;