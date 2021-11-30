import React from 'react';

const CancelButton = props => {
    const { cancelHandler } = props;
    return (
        <button
            onClick={cancelHandler}
        >
            <i className="fas fa-backspace"></i>
            <small>Back</small>
        </button>
    );
}

export default CancelButton;