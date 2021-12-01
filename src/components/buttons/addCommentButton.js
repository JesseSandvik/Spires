import React from 'react';

const AddCommentButton = props => {
    const { addHandler } = props;
    return (
        <button
        title="Add comment"
            onClick={addHandler}
        >
            <i className="fas fa-comment"></i>
            <small>Add Comment</small>
        </button>
    );
}

export default AddCommentButton;