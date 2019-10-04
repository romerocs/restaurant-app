import { connect } from "react-redux";
import * as actions from "../actions";

import React, { Component } from "react";
import YelpSearchForm from "../components/directory/yelp/Form";
import YelpSearchResults from "../components/directory/yelp/Results";
import YelpSearchResult from "../components/directory/yelp/Result";
import AddedRestaurant from "../components/directory/yelp/addedRestaurant";
import DirectoryList from "../components/directory/directoryList";
import DirectoryListItem from "../components/directory/directoryListItem";

import styled from "styled-components";
import breakpoints from "../style-settings/breakpoints";
import sizes from "../style-settings/scale";

const MainWrapper = styled.div`
    max-width: ${breakpoints.tabletLarge}px;
    margin: 0 auto;
    padding-left: ${sizes.large};
    padding-right: ${sizes.large};
`;

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            checkboxSelection: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addButtonClick = this.addButtonClick.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(actions.searchYelp(e.target.keyword.value));
    }

    addButtonClick(i) {
        const restaurant = this.props.results[i];
        this.props.dispatch(actions.addRestaurant(restaurant));
    }

    handleCategoryChange(value) {
        this.props.dispatch(actions.addCategorySelection(value));
    }

    onCheckboxClick(e) {
        let value = e.target.value;

        if (e.target.checked) {
            this.setState(prevState => ({
                checkboxSelection: prevState.checkboxSelection ? [...prevState.checkboxSelection, value] : [value]
            }));
        } else {
            this.setState(prevState => {
                let index = prevState.checkboxSelection.indexOf(value);
                let arr = prevState.checkboxSelection;
                arr.splice(index, 1);

                return { checkboxSelection: arr };
            });
        }
    }

    onSaveClick(obj) {
        let id = this.props.addedRestaurant.id
            ? this.props.addedRestaurant.id
            : obj.id;

        let selectedMeal = this.state.checkboxSelection;

        let payload = {
            id: id,
            selectedCategories: this.props.selectedCategories,
            selectedMeal: selectedMeal,
            type: "yelp"
        };

        this.props.dispatch(actions.updateAddedRestaurant(payload));
    }

    onDeleteClick(id) {
        this.props.dispatch(actions.deleteAddedRestaurant(id));
    }

    render() {
        return (
            <MainWrapper>
                <YelpSearchForm handleSubmit={this.handleSubmit} />
                {this.props.results.length > 0 && (
                    <YelpSearchResults>
                        {this.props.results.map((i, index) => {
                            return (
                                <YelpSearchResult
                                    name={i.name}
                                    key={index}
                                    index={index}
                                    addButtonClick={this.addButtonClick} />
                            );
                        })}
                    </YelpSearchResults>
                )}

                {this.props.addedRestaurant.name && (
                    <AddedRestaurant
                        restaurant={this.props.addedRestaurant}
                        id={this.props.addedRestaurant.id}
                        meal={this.props.meal}
                        categories={this.props.categories}
                        onDeleteClick={this.onDeleteClick}
                        onSaveClick={this.onSaveClick}
                        handleCategoryChange={this.handleCategoryChange}
                        onCheckboxClick={this.onCheckboxClick} />
                )}

                {this.props.directoryList.length > 0 && (
                    <DirectoryList>
                        {this.props.directoryList.map((i, index) => {
                            return (
                                <DirectoryListItem
                                    key={index}
                                    data={i}
                                    handleCategoryChange={this.handleCategoryChange}
                                    meal={this.props.meal}
                                    onDeleteClick={this.onDeleteClick}
                                    categories={this.props.categories} />
                            )
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
