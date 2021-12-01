import React from 'react';

const ReplyButton = props => {
    const { replyHandler } = props;
    return (
        <button
            onClick={replyHandler}
        >
            <i className="fas fa-reply"></i>
            <small>Reply</small>
        </button>
    );
}

export default ReplyButton;