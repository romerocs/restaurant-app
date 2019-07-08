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
    padding: ${ sizes.xxsmall };
    border-radius: 15px;
    border: 1px solid ${ colors.blueLight };
    display:inline-block;
    font-size: ${ sizes.small };
    margin-right: ${ sizes.xxsmall };
`;

export default StyledTagMeal;