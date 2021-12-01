import React from 'react';
import SubmitButton from '../../components/buttons/submitButton';

const TaskForm = props => {

    const {
        changeHandler,
        formValueOne,
        formValueTwo,
        formValueThree,
        formValueFour,
        submitHandler
        } = props;

    return (
        <form onSubmit={submitHandler}>
            <label>Task Title:</label>
            <input
                name="title"
                type="text"
                required
                onChange={changeHandler}
                defaultValue={formValueOne ? formValueOne : ""}
            />
            <label>Task Description:</label>
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
                    <label>Task Due Date:</label>
                    <input
                        name="due_date"
                        type="date"
                        required
                        onChange={changeHandler}
                        defaultValue={formValueThree ? formValueThree : ""}
                    />
                </div>
                <div className="item">
                    <label>Task Due Time:</label>
                    <input
                        name="due_time"
                        type="time"
                        required
                        onChange={changeHandler}
                        defaultValue={formValueFour ? formValueFour : ""}
                    />
                </div>
            </div>
            <div className="btn-group">
                <SubmitButton />
            </div>
        </form>
    );
}

export default TaskForm;