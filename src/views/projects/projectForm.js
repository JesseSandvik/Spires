import React from 'react';
import CancelButton from '../../components/buttons/cancelButton';
import SubmitButton from '../../components/buttons/submitButton';

const ProjectForm = props => {

    const {
        cancelHandler,
        changeHandler,
        formValueOne,
        formValueTwo,
        formValueThree,
        formValueFour,
        submitHandler
        } = props;

    return (
        <form onSubmit={submitHandler}>
            <label>Project Title:</label>
            <input
                name="title"
                type="text"
                required
                onChange={changeHandler}
                defaultValue={formValueOne ? formValueOne : ""}
            />
            <label>Project Description:</label>
            <textarea
                name="description"
                type="text"
                rows="5" cols="50"
                required
                onChange={changeHandler}
                defaultValue={formValueTwo ? formValueTwo : ""}
            />
            <div className="form-dateTime">
                <div className="item">
                    <label>Project Due Date:</label>
                    <input
                        name="due_date"
                        type="date"
                        required
                        onChange={changeHandler}
                        defaultValue={formValueThree ? formValueThree : ""}
                    />
                </div>
                <div className="item">
                    <label>Project Due Time:</label>
                    <input
                        name="due_time"
                        type="time"
                        required
                        onChange={changeHandler}
                        defaultValue={formValueFour ? formValueFour : ""}
                    />
                </div>
            </div>
            <div className="form-btns">
                <SubmitButton />
                <CancelButton cancelHandler={cancelHandler} />
            </div>
            {console.log(formValueOne, formValueTwo, formValueThree, formValueFour)}
        </form>
    );
}

export default ProjectForm;