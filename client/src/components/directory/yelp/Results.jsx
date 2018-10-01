import React from "react";

function Results(props) {
    return (
        <div className="list-group">
            {props.children}
        </div>
    );
}

export default Results;