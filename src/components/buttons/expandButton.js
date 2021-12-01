import React from 'react';

const ExpandButton = props => {
    const { expandHandler } = props;
    return (
        <button
            onClick={expandHandler}
        >
            <i className="fas fa-expand-arrows-alt"></i>
        </button>
    );
}

export default ExpandButton;