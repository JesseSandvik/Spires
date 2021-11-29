import React from 'react';
import SubmitButton from '../../components/buttons/submitButton';

const CommentWindow = props => {
    const {
        changeHandler,
        formValueOne,
        itemName,
        submitHandler
        } = props;

    return (
        <form onSubmit={submitHandler}>
            <label>{itemName} Comment</label>
            <textarea
                name="content"
                type="text"
                rows="3" cols="30"
                required
                onChange={changeHandler}
                defaultValue={formValueOne ? formValueOne : ""}
            />
            <div className="form-btns">
                <SubmitButton />
            </div>
        </form>
    );
}

export default CommentWindow;