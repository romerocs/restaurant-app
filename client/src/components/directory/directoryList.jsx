import React from "react";

function DirectoryList(props) {

    return (
        <div className="list-group">
            {props.children}
        </div>
    )
}

export default DirectoryList;