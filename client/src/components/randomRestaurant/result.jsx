import React from "react";
import RestaurantInfo from "../restaurantInfo";
import styled from "styled-components";
import sizes from "../../style-settings/scale";
import colors from "../../style-settings/colors";

function Result({ className, restaurant }) {

    const {
        name,
        address,
        category,
        meal
    } = restaurant;

    return (
        <div className={className}>
            <RestaurantInfo
                category={category}
                name={name}
                address={address}
                meal={meal}
            />

        </div>
    );
}

const StyledResult = styled(Result)`
    padding-top: ${sizes.large};
    border-top: 1px solid ${colors.greyLightest};
`;
export default StyledResult;
