import React from "react";
import styled from "styled-components";
import sizes from "../../style-settings/scale";
import theming from "../../style-settings/theming";

const AddedRestaurant = ({ restaurant, className, children }) => {
    return (
        <div className={className}>
            <div>{restaurant.name}</div>
            <div>{restaurant.address}</div>
            {children}
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