import React, { useState } from "react";
import DropdownCategories from "../dropdownCategories";
import CheckboxMeals from "../checkboxMeals";
import Button from "../button";
import styled from "styled-components";
import colors from "../../style-settings/colors";
import sizes from "../../style-settings/scale";

const ButtonWrapper = styled.div`
  margin-top: ${sizes.base};
  display: flex;
  justify-content: space-between;
`;
function EditView({
  className,
  onSaveClick,
  onCancelClick,
  handleCategoryChange,
  categories,
  checkboxmeal,
  restaurantMeal,
  restaurantCategory }) {

  const [checkboxes, setCheckboxes] = useState([...restaurantMeal]);

  const onCheckboxClick = (e) => {
    let value = e.target.value;

    if (e.target.checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      let index = checkboxes.indexOf(value);
      let newCheckboxSelection = checkboxes;
      newCheckboxSelection.splice(index, 1);

      setCheckboxes([...newCheckboxSelection]);
    }
  }

  const handleSaveClick = () => {
    onSaveClick(checkboxes);
  }

  const buttonStyles = {
    backgroundColor: "transparent",
    border: `1px solid ${colors.grey}`
  }
  return (
    <div className={className}>
      <DropdownCategories
        categories={categories}
        selected={restaurantCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <CheckboxMeals
        meal={checkboxmeal}
        selected={restaurantMeal}
        onCheckboxClick={onCheckboxClick}
      />


      <ButtonWrapper>
        <Button
          handler={handleSaveClick}
          text="Save"
          style={buttonStyles}
        />

        <Button
          handler={onCancelClick}
          text="Cancel"
          style={buttonStyles}
        />
      </ButtonWrapper>

    </div>
  )
}

export default EditView;