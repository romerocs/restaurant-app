import React from "react";
import styled from "styled-components";
import sizes from "../../../style-settings/scale";
import colors from "../../../style-settings/colors";
import Button from "../../button";
import { buttonThemes } from "../../../style-settings/colors";

const StyledForm = styled.form`
    display: flex;
    margin-bottom: ${sizes.large};
`;
const TextField = styled.input`
    width: 100%;
    padding: ${sizes.xsmall};   
    margin-right: ${sizes.base};
    border-radius: 3px;
    border: 1px solid ${colors.greyLight};
    color: ${colors.greyLight};
`;

const Form = ({ handleSubmit }) => {
    return (
        <StyledForm onSubmit={handleSubmit}>
            <TextField type="text" name="keyword" placeholder="Search Yelp"/>
            <Button text="Search" type="submit" theme={ buttonThemes.primary } />
        </StyledForm>
    
    )
}

export default Form;