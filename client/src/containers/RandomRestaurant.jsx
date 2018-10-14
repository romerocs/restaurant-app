import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import GetRandomRestaurantForm from "../components/randomRestaurant/Form";
import RandomRestaurantResultCard from "../components/randomRestaurant/resultCard";
// import TagMeal from "../components/tagMeal";
// import TagCategory from "../components/tagCategory";

class RandomRestaurant extends Component {
    constructor(props) {
        super(props);
        this.getRandomRestaurant = this.getRandomRestaurant.bind(this);
        this.startOver = this.startOver.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
    }

    getRandomRestaurant(params) {
        let payload = {
            meal: params.meal,
            categories: params.categories
        };

        this.props.dispatch(actions.fetchRandomRestaurant(payload));
        this.props.dispatch(actions.hideForm());
        this.props.dispatch(actions.showResult());
        this.props.dispatch({ type: "UNSET_RESTAURANT" });
    }

    startOver() {
        this.props.dispatch(actions.showForm());
        this.props.dispatch(actions.hideResult());
    }
    tryAgain() {
        this.getRandomRestaurant({
            meal: this.props.mealSelection,
            categories: this.props.categoriesSelection
        });
    }
    render() {
        return (
            <div className="container">
                {this.props.categories &&
                    this.props.meal &&
                    this.props.showForm && (
                        <GetRandomRestaurantForm
                            getRandomRestaurant={this.getRandomRestaurant}
                            categories={this.props.categories}
                            meal={this.props.meal}
                        />
                    )}

                {this.props.restaurant &&
                    this.props.showResult && (
                        <div>
                            <button
                                className="btn btn-outline-primary"
                                onClick={this.tryAgain}
                            >
                                Try again
                            </button>
                            <button
                                className="btn btn-outline-primary"
                                onClick={this.startOver}
                            >
                                Start over
                            </button>
                            <RandomRestaurantResultCard restaurant={this.props.restaurant} />
                        </div>
                    )}
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        meal: state.fetchInitialState.meal,
        mealSelection: state.fetchRandomRestaurant.mealSelection,
        categoriesSelection: state.fetchRandomRestaurant.categoriesSelection,
        showForm: state.uiReducer.showForm,
        showResult: state.uiReducer.showResult,
        restaurant: state.fetchRandomRestaurant.restaurant
    };
})(RandomRestaurant);
