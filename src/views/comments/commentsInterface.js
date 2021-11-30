import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Comment from './comment';
import CommentWindow from './commentWindow';
import { createComment } from '../../utils/api';

const CommentsInterface = props => {
    const navigate = useNavigate();
    const { comments, projectTitle } = props;

    const { projectId } = useParams();
    const { user } = useAuth0();

    const initialCommentState = {
        commenter_name: "",
        commenter_email: "",
        content: "",
        rating: 0,
        project_id: 0,
    }

    const [comment, setComment] = useState({...initialCommentState});
    const [error, setError] = useState(null);
    const [commentWindowToggle, setCommentWindowToggle] = useState("closed");

    const createCommentChangeHandler = ({ target }) => {
        setComment({
            ...comment,
            [target.name]: target.value,
        });
    }

    const createCommentSubmitHandler = (event) => {
        event.preventDefault();
        createComment({
            ...comment,
            commenter_name: user.name,
            commenter_email: user.email,
            rating: 0,
            project_id: projectId,
        })
            .then(() => navigate(0))
            .catch((error) => setError(error));
        setComment({...initialCommentState})
    }

    const commentWindowToggleHandler = (event) => {
        event.preventDefault();
        (commentWindowToggle === "closed" ? setCommentWindowToggle("open") : setCommentWindowToggle("closed"));
    }

    const commentsList = comments.map((comment) => <li key={comment.comment_id}><Comment comment={comment} /></li>)

    return (
        <div className="comments">
            <div className="comments-title">
                <h3>Comments for <span>{projectTitle}</span></h3>
            </div>
            <i
                className="far fa-comment-dots"
                onClick={commentWindowToggleHandler}
            ></i>
                {commentWindowToggle === "open" && (
                    <CommentWindow
                        changeHandler={createCommentChangeHandler}
                        itemName={"Add"}
                        submitHandler={createCommentSubmitHandler}
                    />
                )}
            <div className="comments-body">
                {commentsList}
            </div>
        </div>
    );
}

export default withAuthenticationRequired(CommentsInterface);