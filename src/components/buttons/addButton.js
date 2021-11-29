import React from 'react';

const AddButton = props => {
    const { itemName, addHandler } = props;
    return (
        <div className="btn btn-add">
            <button onClick={addHandler}>Add {itemName}</button>
        </div>
    );
}

export default AddButton;