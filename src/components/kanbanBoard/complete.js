import React from 'react';
import Cards from '../../views/cards/cards';

const Complete = props => {
    const { cards } = props;
    return (
        <div className="item">
            <h3>Completed</h3>
            <Cards cards={cards} />
        </div>
    );
}

export default Complete;