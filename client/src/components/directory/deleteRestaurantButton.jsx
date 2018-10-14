import React from "react";

function DeleteRestaurantButton(props) {
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={props.onDeleteClick}
                id={props.id}
            >
                
                Delete
            </button>
        </div>
    );
}

export default DeleteRestaurantButton;
