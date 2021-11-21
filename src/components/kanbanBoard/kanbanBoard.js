import React from 'react';
import Complete from './complete';
import InProgress from './inProgress';
import ToDo from './toDo';

const KanbanBoard = props => {
    const { cards } = props;

    return (
        <div className="kanban">
            <ToDo cards={cards} />
            <InProgress cards={cards} />
            <Complete cards={cards} />
        </div>
    );
}

export default KanbanBoard;