import React from "react";

function TagMeal(props) {
    return (
        <span className="badge badge-primary">{props.meal}</span>
    );
}

export default TagMeal;