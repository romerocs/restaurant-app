import { connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../../actions";

import DeleteRestaurantButton from "../deleteRestaurantButton";
import DropdownCategories from "../../dropdownCategories";
import CheckboxMeals from "../../checkboxMeals";

import styled from "styled-components";
import sizes from "../../../style-settings/scale";
import { BasicContainer } from "../../../style-settings/theming";

const AddedRestaurantWrapper = styled.div`
  ${ BasicContainer}
  margin-bottom: ${sizes.xlarge};
`;

class AddedRestaurant extends Component {
  constructor(props) {
    super(props);

    this.removeAddedRestaurant = this.removeAddedRestaurant.bind(this);
  }

  removeAddedRestaurant() {
    this.props.dispatch({ type: "REMOVE_ADDED_RESTAURANT" });
  }

  render() {
    const { name, address } = this.props.addedRestaurant;
    const { categories, meal } = this.props;

    return (
      <AddedRestaurantWrapper>
        <h2>{name}</h2>
        <address>{address}</address>
        <div>
          <DropdownCategories
            categories={categories}
            selected={false}
            handleCategoryChange={this.props.handleCategoryChange}
          />
          <CheckboxMeals
            meal={meal}
            selected={false}
            onCheckboxClick={this.props.onCheckboxClick}
          />
        </div>
        <div>
          <button
            onClick={this.props.onSaveClick}
            id={this.props.id}
          >
            Save
          </button>
          <button onClick={this.removeAddedRestaurant}>
            Cancel
          </button>
        </div>
      </AddedRestaurantWrapper>
    )
  }
}

export default connect((state, props) => {
  return {
    addedRestaurant: state.displayAddedRestaurant.addedRestaurant,
    selectedCategories: state.categorySelection.categoriesSelection,
    selectedMeal: state.checkboxSelection.selectedCheckboxes,
  };
})(AddedRestaurant);