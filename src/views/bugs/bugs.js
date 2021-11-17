import React from 'react';
import Bug from './bug';

const Bugs = props => {
    const { bugs } = props;

    const bugsList = bugs.map((bug) => <li key={bug.bug_id}><Bug bug={bug} /></li>)
    return (
        <article>
            <h3>Bugs</h3>
            {bugsList}
        </article> 
    );
}

export default Bugs;