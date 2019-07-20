import React from "react";
import styled from "styled-components";
import colors from "../style-settings/colors";
import sizes from "../style-settings/scale";
import { capitalizeFirstLetter } from "../helpers";

function TagMeal({ className, meal }) {
    const transformedMeal = capitalizeFirstLetter(meal);
    
    return (
        <span className={className}>{ transformedMeal }</span>
    );
}

const StyledTagMeal = styled(TagMeal)`
    color: ${ colors.blueLight };
`;

export default StyledTagMeal;