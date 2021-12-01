import React from 'react';

const ViewCommentsButton = props => {
    const { commentsHandler } = props;
    return (
        <button
            onClick={commentsHandler}
        >
            <i className="far fa-comments"></i>
            <small>Comments</small>
        </button>
    );
}

export default ViewCommentsButton;