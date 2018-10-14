import React, { Component } from "react";

class DropdownCategories extends Component {
    constructor() {
        super();
        this.state = {
            value: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        if (this.props.selected) {
            this.setState({
                value: this.props.selected
            });
        }
    }
    handleChange(e) {
        this.setState(
            {
                value: e.target.value
            },
            () => {
                this.props.handleCategoryChange(this.state.value);
            }
        );
    }
    render() {
        return (
            <select
                className="form-control"
                name="categories"
                id="categories"
                onChange={this.handleChange}
                value={this.state.value}
            >
                <option value="">Select a category</option>
                {this.props.categories.map((i, index) => {
                    return (
                        <option value={i.category} key={index}>
                            {i.category}
                        </option>
                    );
                })}
            </select>
        );
    }
}
export default DropdownCategories;
