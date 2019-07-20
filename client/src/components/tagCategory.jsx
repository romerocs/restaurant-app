import React from "react";
import styled from "styled-components";
import colors from "../style-settings/colors";
import sizes from "../style-settings/scale";
import { capitalizeFirstLetter } from "../helpers";

function TagCategory({ className, category }) {
    const transformedCategory = capitalizeFirstLetter(category);

    return (
        <span className={className}>{ transformedCategory }</span>
    );
}

const StyledTagCategory = styled(TagCategory)`
    color: ${ colors.pink };
    padding: ${ sizes.xxsmall } ${ sizes.small } ;
    border-radius: 15px;
    border: 1px solid ${ colors.pink };
    display:inline-block;
    font-size: ${ sizes.small }
`;

export default StyledTagCategory;