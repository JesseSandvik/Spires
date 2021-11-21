import React from 'react';
import Card from './card';

const Cards = props => {
    const { cards, error } = props;

    const cardsList = cards.map((card) => <li key={card.card_id}><Card card={card} /></li>)
    if (cards) {
        return (
            <article>
                {cardsList}
            </article> 
        );
    } else {
        return <>{error && <p>{error}</p>}</>
    }
}

export default Cards;