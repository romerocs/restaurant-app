import { connect } from "react-redux";
import * as actions from "../actions";

import React, { Component } from "react";
import YelpSearchForm from "../components/directory/yelp/Form";
import YelpSearchResults from "../components/directory/yelp/Results";
import YelpSearchResult from "../components/directory/yelp/Result";
import AddedRestaurant from "../components/directory/addedRestaurant";
import DropdownCategories from "../components/dropdownCategories";
import CheckboxMeals from "../components/checkboxMeals";
import UpdateRestaurantButton from "../components/directory/updateRestaurantButton";
import DeleteRestaurantButton from "../components/directory/deleteRestaurantButton";
import DirectoryList from "../components/directory/directoryList";
import RestaurantOptions from "../components/restaurantOptions";

import styled from "styled-components";
import breakpoints from "../style-settings/breakpoints";

const MainWrapper = styled.div`
    max-width: ${breakpoints.tabletLarge}px;
    width: 100%;
    margin: 0 auto;
`;

class Directory extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addButtonClick = this.addButtonClick.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(actions.searchYelp(e.target.keyword.value));
    }
    addButtonClick(e) {
        let i = e.target.getAttribute("index");
        let restaurant = this.props.results[i];
        this.props.dispatch(actions.addRestaurant(restaurant));
    }
    handleCategoryChange(value) {
        this.props.dispatch(actions.addCategorySelection(value));
    }
    onSaveClick(obj) {
        let e = obj.event;
        let id = this.props.addedRestaurant.id
            ? this.props.addedRestaurant.id
            : e.target.id;
        let type = e.target.getAttribute("savetype");
        let selectedMeal = obj.checkboxSelection;
        let payload = {
            id: id,
            selectedCategories: this.props.selectedCategories.category,
            selectedMeal: selectedMeal,
            type: type
        };

        this.props.dispatch(actions.updateAddedRestaurant(payload));
    }

    onDeleteClick(e) {
        this.props.dispatch(actions.deleteAddedRestaurant(e.target.id));
    }
    render() {
        return (
            <MainWrapper>
                <YelpSearchForm handleSubmit={this.handleSubmit} />
                {this.props.results.length > 0 && (
                    <YelpSearchResults>
                        {this.props.results.map((i, index) => {
                            return (
                                <YelpSearchResult name={i.name} key={index}>
                                    <button
                                        className="btn btn-primary"
                                        onClick={this.addButtonClick}
                                        index={index}
                                    >
                                        Add
                                    </button>
                                    {/* 
                                        TODO: ADD CANCEL BUTTON
                                    */}
                                </YelpSearchResult>
                            );
                        })}
                    </YelpSearchResults>
                )}

                {this.props.addedRestaurant.name && (
                    <AddedRestaurant
                        restaurant={this.props.addedRestaurant}
                        id={this.props.addedRestaurant.id}
                    >
                        <RestaurantOptions
                            id={this.props.addedRestaurant.id}
                            categories={this.props.categories}
                            checkboxmeal={this.props.meal}
                            handleCategoryChange={this.handleCategoryChange}
                            onSaveClick={this.onSaveClick}
                            includeEditButton={false}
                            savetype="yelp"
                        />

                        <DeleteRestaurantButton
                            onDeleteClick={this.onDeleteClick}
                            id={this.props.addedRestaurant.id}
                        />
                    </AddedRestaurant>
                )}

                {this.props.directoryList.length > 0 && (
                    <DirectoryList>
                        {this.props.directoryList.map((i, index) => {
                            return (
                                <AddedRestaurant
                                    key={index}
                                    restaurant={i}
                                    id={i.id}
                                >
                                    <RestaurantOptions
                                        id={i.id}
                                        categories={this.props.categories}
                                        checkboxmeal={this.props.meal}
                                        handleCategoryChange={
                                            this.handleCategoryChange
                                        }
                                        onSaveClick={this.onSaveClick}
                                        meal={i.meal}
                                        category={i.category}
                                        includeEditButton={true}
                                        savetype="directory"
                                    />

                                    <DeleteRestaurantButton
                                        onDeleteClick={this.onDeleteClick}
                                        id={i.id}
                                    />
                                </AddedRestaurant>
                            );
                        })}
                    </DirectoryList>
                )}
            </MainWrapper>
        );
    }
}

export default connect((state, props) => {
    return {
        results: state.yelpSearch.results,
        total: state.yelpSearch.total,
        addedRestaurant: state.displayAddedRestaurant.addedRestaurant,
        selectedCategories: state.categorySelection.categoriesSelection,
        selectedMeal: state.checkboxSelection.selectedCheckboxes,
        directoryList: state.fetchInitialState.directoryList
    };
})(Directory);
