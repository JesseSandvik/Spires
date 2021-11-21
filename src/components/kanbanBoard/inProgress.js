import React from 'react';
import Cards from '../../views/cards/cards';

const InProgress = props => {
    const { cards } = props;
    return (
        <div className="item">
            <h3>In Progress</h3>
            <Cards cards={cards} />
        </div>
    );
}

export default InProgress;