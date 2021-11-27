import React from 'react';

const Task = props => {
    const { task } = props;
    return (
        <div>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
        </div>
    );
}

export default Task;