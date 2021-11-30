import React from 'react';
import Task from '../../views/tasks/task';

const Completed = props => {
    const { tasks } = props;
    
    const completedTaskList = tasks.map((task) => <li key={task.task_id}><Task task={task} /></li>);

    return (
        <div className="item">
            <div className="item-title">
                <h3>Completed</h3>
            </div>
            <div className="item-three">
                <ul>{completedTaskList}</ul>
            </div>
        </div>
    );
}

export default Completed;