import React from 'react';
import CancelButton from '../components/buttons/cancelButton';
import SubmitButton from '../components/buttons/submitButton';

const Form = props => {
    const { cancelHandler, submitHandler } = props;

    return (
        <form onSubmit={submitHandler}>
            <label>Project Name</label>
            <input
                name="project_name"
                type="text"
                required
                placeholder="enter project name here"
            />
            <label>Project Description</label>
            <textarea
                name="project_description"
                type="text"
                required
                placeholder="a brief description of the project"
            />
            <div>
                <SubmitButton />
                <CancelButton cancelHandler={cancelHandler} />
            </div>
        </form>
    );
}

export default Form;