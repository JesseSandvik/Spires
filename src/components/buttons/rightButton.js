import React from 'react';

const RightButton = props => {
    const { rightHandler } = props;
    return (
        <button
            onClick={rightHandler}
        >
            <i className="far fa-arrow-alt-circle-right"></i>
        </button>
    );
}

export default RightButton;