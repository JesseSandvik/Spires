import React from 'react';

const ViewKanbanButton = props => {
    const { kanbanHandler } = props;
    return (
        <button
            onClick={kanbanHandler}
        >
            <i className="fas fa-thumbtack"></i>
            <small>Tasks</small>
        </button>
    );
}

export default ViewKanbanButton;