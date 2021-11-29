import React from 'react';
import Task from '../../views/tasks/task';

const InProgress = props => {
    const { tasks } = props;
    
    const inProgressTaskList = tasks.map((task) => <li key={task.task_id}><Task task={task} /></li>);

    return (
        <div className="item">
            <div className="item-title">
                <h3>In Progress</h3>
            </div>
            <ul>{inProgressTaskList}</ul>
        </div>
    );
}

export default InProgress;