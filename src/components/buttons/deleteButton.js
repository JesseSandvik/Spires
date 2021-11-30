import React from 'react';

const DeleteButton = props => {
    const { itemName, deleteHandler } = props;
    return (
        <button
            onClick={deleteHandler}
        >
            <i className="far fa-trash-alt"></i>
            <small>Delete {itemName}</small>
        </button>
    );
}

export default DeleteButton;