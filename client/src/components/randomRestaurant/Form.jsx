import React, { Component } from "react";
import DropdownCategories from "../dropdownCategories";
import DropdownMeals from "../dropdownMeals";
import StyledButton from "../button";
import { buttonThemes } from "../../style-settings/colors";

class GetRandomRestaurantForm extends Component {
    constructor() {
        super();

        this.state = {
            showMeals: false,
            showSubmit: false,
            category: false,
            meal: false
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleMealChange = this.handleMealChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCategoryChange(value) {
        this.setState({ showMeals: true, category: value });
    }
    handleMealChange(value) {
        this.setState({ showSubmit: true, meal: value });
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.getRandomRestaurant({
            meal: this.state.meal,
            categories: this.state.category
        });
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <DropdownCategories categories={this.props.categories} handleCategoryChange={this.handleCategoryChange} />

                {this.state.showMeals && (
                    <DropdownMeals meal={this.props.meal} handleMealChange={this.handleMealChange} />
                )}

                {this.state.showSubmit && (
                    <StyledButton text="Randomize It" type="submit" theme={buttonThemes.primary} />
                )}
            </form>
        );
    }
}

export default GetRandomRestaurantForm;
