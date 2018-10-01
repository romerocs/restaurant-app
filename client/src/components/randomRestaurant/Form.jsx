import React, { Component } from "react";
import DropdownCategories from "../dropdownCategories";
import DropdownMeals from "../dropdownMeals";

class GetRandomRestaurantForm extends Component {
    constructor() {
        super();

        this.state = {
            showMeals: false,
            showSubmit: false
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleMealChange = this.handleMealChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCategoryChange(e) {
        this.setState({ showMeals: true });
    }
    handleMealChange(e) {
        this.setState({ showSubmit: true });
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.getRandomRestaurant({
            meal: e.target.meal.value,
            categories: e.target.categories.value
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
                    <input type="submit" value="Submit" className="button"/>
                )}
            </form>
        );
    }
}

export default GetRandomRestaurantForm;
