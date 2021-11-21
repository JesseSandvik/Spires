import React from 'react';

const CancelButton = props => {
    const { cancelHandler } = props;
    return (
        <div className="btn btn-cancel">
            <button onClick={cancelHandler}>Cancel</button>
        </div>
    );
}

export default CancelButton;