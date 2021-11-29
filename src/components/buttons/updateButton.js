import React from 'react';

const UpdateButton = props => {
    const { itemName, updateHandler } = props;
    return (
        <div className="btn btn-update">
            <button onClick={updateHandler}>Edit {itemName}</button>
        </div>
    );
}

export default UpdateButton;