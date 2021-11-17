import React from 'react';
import Card from './card';

const Cards = props => {
    const { cards } = props;

    const cardsList = cards.map((card) => <li key={card.card_id}><Card card={card} /></li>)
    return (
        <article>
            <h3>Cards</h3>
            {cardsList}
        </article> 
    );
}

export default Cards;