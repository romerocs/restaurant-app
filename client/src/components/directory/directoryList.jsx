import React from "react";
import styled from "styled-components";
import sizes from "../../style-settings/scale";

function DirectoryList({ className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

const StyledDirectoryList = styled(DirectoryList)`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: ${sizes.xxlarge};
`;

export default StyledDirectoryList;