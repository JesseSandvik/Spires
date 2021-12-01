import React from 'react';

const DeleteCommentButton = props => {
    const { deleteHandler } = props;
    return (
        <button
        title="Delete comment"
            onClick={deleteHandler}
        >
            <i className="fas fa-comment-slash"></i>
        </button>
    );
}

export default DeleteCommentButton;