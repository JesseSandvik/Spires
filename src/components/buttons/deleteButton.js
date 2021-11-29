import React from 'react';

const DeleteButton = props => {
    const { deleteHandler } = props;
    return (
        <div className="btn btn-delete">
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default DeleteButton;