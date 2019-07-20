import React from "react";
import styled from "styled-components";
import sizes from "../../../style-settings/scale";
import colors from "../../../style-settings/colors";

function Results( { className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

const StyledResults = styled(Results)`
    border: 1px solid ${colors.greyLight};
    background-color: ${colors.greyLightest};
    margin-bottom: ${sizes.xxlarge};
`

export default StyledResults;