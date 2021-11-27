import React from 'react';
import Available from './available';
import Completed from './completed';
import InProgress from './inProgress';

const KanbanBoard = props => {
    const { tasks } = props;

    return (
        <div className="kanban">
            <Available tasks={tasks} />
            <InProgress tasks={tasks} />
            <Completed tasks={tasks} />
        </div>
    );
}

export default KanbanBoard;