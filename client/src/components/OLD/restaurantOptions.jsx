import React, { Component } from "react";
import DropdownCategories from "./dropdownCategories";
import CheckboxMeals from "./checkboxMeals";
import EditRestaurantButton from "../components/directory/editRestaurantButton";
import TagCategory from "./tagCategory";
import TagMeal from "./tagMeal";

class RestaurantOptions extends Component {
    constructor() {
        super();

        this.state = {
            editMode: false,
            checkboxSelection: []
        };
        this.onEditClick = this.onEditClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);
    }

    componentDidMount() {
        this.setState({ checkboxSelection: this.props.meal });
    }

    onEditClick() {
        this.setState({ editMode: true });
    }
    onSaveClick(e) {
        this.setState({ editMode: false });
        this.props.onSaveClick({
            event: e,
            checkboxSelection: this.state.checkboxSelection
        });
    }
    onCancelClick(e) {
        this.setState({ editMode: false });
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
    render() {
        if (this.props.includeEditButton) {
            return (
                <React.Fragment>
                    {this.state.editMode && (
                        <React.Fragment>
                            <DropdownCategories
                                categories={this.props.categories}
                                selected={this.props.category}
                                handleCategoryChange={
                                    this.props.handleCategoryChange
                                }
                            />
                            <CheckboxMeals
                                meal={this.props.checkboxmeal}
                                selected={this.props.meal}
                                onCheckboxClick={this.onCheckboxClick}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={this.onSaveClick}
                                id={this.props.id}
                                checkboxes={this.state.checkboxSelection}
                                savetype={this.props.savetype}
                            >
                                Save
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={this.onCancelClick}
                            >
                                Cancel
                            </button>
                        </React.Fragment>
                    )}
                    {this.state.editMode === false && (
                        <React.Fragment>
                            {this.props.meal &&
                                this.props.meal.map((i, index) => {
                                    return <TagMeal key={index} meal={i} />;
                                })}
                            <TagCategory category={this.props.category} />
                            <EditRestaurantButton onEditClick={ this.onEditClick }/>
                        </React.Fragment>
                    )}
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <DropdownCategories
                        categories={this.props.categories}
                        selected={false}
                        handleCategoryChange={this.props.handleCategoryChange}
                    />
                    <CheckboxMeals
                        meal={this.props.checkboxmeal}
                        selected={false}
                        onCheckboxClick={this.onCheckboxClick}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={this.onSaveClick}
                        id={this.props.id}
                        checkboxes={this.state.checkboxSelection}
                        savetype={this.props.savetype}
                    >
                        Save
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={this.onCancelClick}
                    >
                        Cancel
                    </button>
                </React.Fragment>
            );
        }
    }
}
export default RestaurantOptions;
