import React from 'react';

const AddButton = props => {
    const { itemName, addHandler } = props;
    return (
        <button
            onClick={addHandler}
        >
            <i className="fas fa-plus-square"></i>
            <small>Add {itemName}</small>
        </button>
    );
}

export default AddButton;