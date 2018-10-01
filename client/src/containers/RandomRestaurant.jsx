import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import GetRandomRestaurantForm from "../components/randomRestaurant/Form";
import RandomRestaurantResult from "../components/Result";

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
                            <button onClick={this.tryAgain}>
                                Try again
                            </button>
                            <button onClick={this.startOver}>Start over</button>
                            <RandomRestaurantResult
                                name={this.props.restaurant.name}
                            />
                        </div>
                    )}
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        meal: state.fetchInitialState.meal,
        categories: state.fetchInitialState.categories,
        restaurant: state.fetchRandomRestaurant.restaurant,
        mealSelection: state.fetchRandomRestaurant.mealSelection,
        categoriesSelection: state.fetchRandomRestaurant.categoriesSelection,
        showForm: state.uiReducer.showForm,
        showResult: state.uiReducer.showResult
    };
})(RandomRestaurant);
