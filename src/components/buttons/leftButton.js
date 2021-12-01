import React from 'react';

const LeftButton = props => {
    const { leftHandler } = props;
    return (
        <button
            onClick={leftHandler}
        >
            <i className="far fa-arrow-alt-circle-left"></i>
        </button>
    );
}

export default LeftButton;