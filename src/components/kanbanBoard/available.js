import React from 'react';
import Cards from '../../views/cards/cards';

const Available = props => {
    const { cards } = props;
    return (
        <div className="item">
            <h3>Available</h3>
            <Cards cards={cards} />
        </div>
    );
}

export default Available;