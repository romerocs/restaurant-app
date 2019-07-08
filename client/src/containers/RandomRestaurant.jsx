import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import GetRandomRestaurantForm from "../components/randomRestaurant/Form";
import RandomRestaurantResultCard from "../components/randomRestaurant/resultCard";
import Button from "../components/button";
import { buttonThemes } from "../style-settings/colors";

import styled from "styled-components";
import sizes from "../style-settings/scale";
import theming from "../style-settings/theming";

const MainWrapper = styled.div`
    background-color: white;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 50px;
    border-radius: 15px;
    box-shadow: ${theming.cardShadow};
`;

const ActionsWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`;

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
            <React.Fragment>
                <ActionsWrapper>
                    <Link to="/directory" className="button-primary">Directory</Link>
                </ActionsWrapper>
                <MainWrapper>
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
                                <Button
                                    text="Try Again"
                                    handler={this.tryAgain}
                                    style={{ marginRight: sizes.base }}
                                    theme={buttonThemes.secondary} />
                                <Button
                                    text="Start Over"
                                    handler={this.startOver}
                                    theme={buttonThemes.secondary} />

                                <RandomRestaurantResultCard restaurant={this.props.restaurant} />
                            </div>
                        )}
                </MainWrapper>
            </React.Fragment>
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
