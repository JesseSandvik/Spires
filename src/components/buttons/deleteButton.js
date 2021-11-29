import React from 'react';

const DeleteButton = props => {
    const { itemName, deleteHandler } = props;
    return (
        <div className="btn btn-delete">
            <button onClick={deleteHandler}>Delete {itemName}</button>
        </div>
    );
}

export default DeleteButton;