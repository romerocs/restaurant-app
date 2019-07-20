import { connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../actions";

import RestaurantInfo from "../restaurantInfo";
import EditView from "./editView";
import EditRestaurantButton from "./editRestaurantButton";
import DeleteRestaurantButton from "./deleteRestaurantButton";

import styled from "styled-components";
import sizes from "../../style-settings/scale";
import colors from "../../style-settings/colors";
import { BasicContainer } from "../../style-settings/theming";

const Restaurant = styled.div`
  ${ BasicContainer}
`;

const EditDeleteWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-top: ${sizes.large};
`;


const StyledEditView = styled(EditView)`
  background-color: ${colors.greyLightest};
  padding: ${sizes.large};
  margin-top: ${sizes.small};
  border-radius: 5px;
`;

class DirectoryListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    }

    this.onEditClick = this.onEditClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onEditClick() {
    this.setState({ editMode: true });
  }

  onCancelClick(e) {
    this.setState({ editMode: false });
  }

  onSaveClick(checkboxes) {
    this.setState({ editMode: false });

    let payload = {
      id: this.props.data.id,
      selectedCategories: this.props.selectedCategories,
      selectedMeal: checkboxes,
      type: "directory"
    };

    this.props.dispatch(actions.updateAddedRestaurant(payload));
  }

  render() {
    const editMode = this.state.editMode;
    const {
      name,
      address,
      id,
      category,
      meal
    } = this.props.data;

    return (
      <Restaurant>
        <RestaurantInfo 
          category={category}
          name={name} 
          address={address}
          meal={meal}
        />

        {editMode && (
          <StyledEditView
            onCancelClick={this.onCancelClick}
            categories={this.props.categories}
            checkboxmeal={this.props.meal}
            restaurantMeal={meal}
            restaurantCategory={category}
            handleCategoryChange={this.props.handleCategoryChange}
            onSaveClick={this.onSaveClick} />
        )
        }
        {
          !editMode && (
            <EditDeleteWrapper>
              <EditRestaurantButton onEditClick={this.onEditClick} />
              <DeleteRestaurantButton
                onDeleteClick={this.props.onDeleteClick}
                id={id}
              />
            </EditDeleteWrapper>
          )
        }

      </Restaurant>
    )
  }
}

export default connect((state, props) => {
  return {
    addedRestaurant: state.displayAddedRestaurant.addedRestaurant,
    selectedCategories: state.categorySelection.categoriesSelection,
    selectedMeal: state.checkboxSelection.selectedCheckboxes,
  };
})(DirectoryListItem);