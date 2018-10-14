import React from "react";

function TagCategory(props) {
    return (
        <span className="badge badge-secondary">{props.category}</span>
    );
}

export default TagCategory;