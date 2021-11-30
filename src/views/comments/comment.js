import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { formatDate } from '../../utils/formatDate';
import { formatTime } from '../../utils/formatTime';
import { deleteComment } from '../../utils/api';

const Comment = props => {
    const navigate = useNavigate();
    const { comment } = props;

    const [error, setError] = useState(null);

    const deleteCommentHandler = (event) => {
        event.preventDefault();
        setError(null);
        const confirmDelete = window.confirm("Are you sure you want to delete this project? It cannot be recovered.");

        if (confirmDelete) {
            deleteComment(comment.comment_id)
                .then(() => navigate(0))
                .catch((error) => setError(error));
        }
    }

    return (
        <div className="comment">
            <div className="comment-title">
            <div className="date">
                        <small>{formatDate(comment.updated_at)}</small>
                </div>
                <div className="name">
                    <h4>{comment.commenter_name}</h4>
                    <i className="fas fa-reply"></i>
                    <i className="far fa-edit"></i>
                    <i
                        className="fas fa-comment-slash"
                        onClick={deleteCommentHandler}
                    ></i>
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