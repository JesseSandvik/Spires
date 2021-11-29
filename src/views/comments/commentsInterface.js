import React from 'react';
import Comment from './comment';

const CommentsInterface = props => {
    const { comments, projectTitle } = props;

    const commentsList = comments.map((comment) => <li key={comment.comment_id}><Comment comment={comment} /></li>)

    return (
        <div className="comments">
            <div className="comments-title">
                <h3>Comments for <span>{projectTitle}</span></h3>
            </div>
            <div className="comments-body">
                {commentsList}
            </div>
        </div>
    );
}

export default CommentsInterface;