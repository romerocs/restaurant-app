import React, { Component } from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="keyword" />
            <input type="submit" />
        </form>
    
    )
}

export default Form;