import React from "react";
import styled from "styled-components";
import sizes from "../../../style-settings/scale";
import colors from "../../../style-settings/colors";
import Button from "../../button";
import { buttonThemes } from "../../../style-settings/colors";

const TextField = styled.input`
    width: 100%;
    padding: ${sizes.xsmall};
    border-radius: 3px;
    border: 1px solid ${colors.greyLight};
    color: ${colors.greyLight};
`;

const Form = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextField type="text" name="keyword" placeholder="Search Yelp"/>
            <Button text="Search" type="submit" theme={ buttonThemes.primary } />
        </form>
    
    )
}

export default Form;