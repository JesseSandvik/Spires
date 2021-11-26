import React from 'react';
import Available from './available';
import Complete from './complete';
import InProgress from './inProgress';

const KanbanBoard = props => {
    const { cards } = props;

    return (
        <div className="kanban">
            <Available cards={cards} />
            <InProgress cards={cards} />
            <Complete cards={cards} />
        </div>
    );
}

export default KanbanBoard;