import React from 'react';
import CommentForm from './commentForm';

const CommentWindow = props => {
    const {
        changeHandler,
        formValueOne,
        itemName,
        submitHandler
        } = props;

    return (
        <div className="commentWindow">
            <CommentForm
                changeHandler={changeHandler}
                formValueOne={formValueOne}
                itemName={itemName}
                submitHandler={submitHandler}
            />
        </div>
    );
}

export default CommentWindow;