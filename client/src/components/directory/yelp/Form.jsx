import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="keyword" />
            <input className="btn btn-primary" type="submit" />
        </form>
    
    )
}

export default Form;