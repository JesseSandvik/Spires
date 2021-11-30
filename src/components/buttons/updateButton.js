import React from 'react';

const UpdateButton = props => {
    const { itemName, updateHandler } = props;
    return (
            <button
                onClick={updateHandler}
            >
                <i className="fas fa-edit"></i>
                <small>Edit {itemName}</small>
            </button>
    );
}

export default UpdateButton;