import React from 'react';
import { formatDate } from '../../utils/formatDate';
import { formatTime } from '../../utils/formatTime';

const Comment = props => {
    const { comment } = props;

    return (
        <div className="comment">
            <div className="comment-title">
            <div className="date">
                        <small>{formatDate(comment.updated_at)}</small>
                </div>
                <div className="name">
                    <h4>{comment.commenter_name}</h4>
                </div>
                <div className="time">
                        <small>{formatTime(comment.updated_at)}</small>
                </div>
            </div>
            <p>{comment.content}</p>
        </div>
    );
}

export default Comment;