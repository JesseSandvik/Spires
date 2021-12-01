import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { createComment } from '../../utils/api';
import AddCommentButton from '../../components/buttons/addCommentButton';
import Comment from './comment';
import CommentWindow from './commentWindow';
import ErrorAlert from '../../layout/errorAlert';

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
    const [viewCommentWindow, setViewCommentWindow] = useState("closed");

    const addCommentHandler = (event) => {
        event.preventDefault();
        if (viewCommentWindow === "closed") {
            setViewCommentWindow("open");
        } else {
            setViewCommentWindow("closed");
        }
    }

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

    const commentsList = comments.map((comment) => <li key={comment.comment_id}><Comment comment={comment} /></li>)

    return (
        <>
            <div className="commentsTitle">
                <div className="item item-one">
                    <AddCommentButton
                        addHandler={addCommentHandler}
                    />
                </div>
                <div className="item item-two">
                    <h3>Comments for {projectTitle}</h3>
                </div>
                <div className="item item-three">
                </div>
            </div>
            <div className="commentsBody">
                <ErrorAlert error={error} />
                {viewCommentWindow === "open" && (
                    <CommentWindow
                        changeHandler={createCommentChangeHandler}
                        itemName={"Add"}
                        submitHandler={createCommentSubmitHandler}
                    />
                )}
                {commentsList}
            </div>
        </>
    );
}

export default withAuthenticationRequired(CommentsInterface);