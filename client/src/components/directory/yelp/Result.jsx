import React from "react";

function Result(props) {
    return (
        <div className="list-group-item">
            <div>{props.name}</div>
            {props.children}
        </div>
    );
}

export default Result;
