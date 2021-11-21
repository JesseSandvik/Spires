import React from 'react';
import Cards from '../../views/cards/cards';

const ToDo = props => {
    const { cards } = props;
    return (
        <div className="item">
            <h3>To Do</h3>
            <Cards cards={cards} />
        </div>
    );
}

export default ToDo;