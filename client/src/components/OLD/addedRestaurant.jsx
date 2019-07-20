import React from "react";
import styled from "styled-components";
import sizes from "../../style-settings/scale";
import theming from "../../style-settings/theming";

const AddedRestaurant = ({ restaurant, className, children }) => {
    const tools = <div> {children}</div>;

    return (
        <div className={className}>
            <div>{restaurant.name}</div>
            <div>{restaurant.address}</div>
            <div>{children}</div>
        </div>
    
    )
}

const StyledAddedRestaurant = styled(AddedRestaurant)`
    background-color: #ffffff;
    padding: ${sizes.xlarge};
    border-radius: 5px;
    box-shadow: ${theming.cardShadow};
`;

export default StyledAddedRestaurant;