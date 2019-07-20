import React from "react";
import { capitalizeFirstLetter } from "../helpers";
import TagCategory from "./tagCategory";

import styled from "styled-components";
import sizes from "../style-settings/scale";
import colors from "../style-settings/colors";

const StyledCategories = styled.div`
  color: ${colors.grey};
  font-size: ${sizes.small};
  padding-top: ${sizes.small};
`;

function RestaurantInfo({ name, address, meal, category }) {
  return (
    <>
      <TagCategory category={category} />
      <h2>{name}</h2>
      <address>{address}</address>
      <StyledCategories>
        Good for&nbsp;
              {meal &&
          meal.map((m, i) => {
            const comma = (i < (meal.length - 1)) ? "," : "";

            return `${capitalizeFirstLetter(m)}${comma} `;
          })}
      </StyledCategories>
    </>

  )
}

export default RestaurantInfo;