import React from 'react';

const UpdateButton = props => {
    const { updateHandler } = props;
    return (
        <div className="btn btn-update">
            <button onClick={updateHandler}>Edit</button>
        </div>
    );
}

export default UpdateButton;