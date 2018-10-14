import React from "react";

function UpdateRestaurantButton(props) {
    return (
        <button
            className="btn btn-primary"
            onClick={props.onSaveClick}
            id={props.id}
            savetype={props.savetype}
        >
            Save
        </button>
    );
}

export default UpdateRestaurantButton;
