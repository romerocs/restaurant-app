import React, { Component } from "react";
import Select from 'react-select';
import styled from 'styled-components';
import sizes from '../style-settings/scale';

class DropdownCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.selected
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(data) {
        const { value } = data;

        this.setState(
            {
                value: value
            },
            () => {
                this.props.handleCategoryChange(this.state.value);
            }
        );
    }
    render() {
        const options = [...this.props.categories];
        
        options.map((e) => {
            e.value = e.category;
            e.label = e.category;
        });
        
        const value = (this.state.value === undefined) ? "Select a category" : this.state.value;

        return (
            <Select
                className={this.props.className}
                onChange={this.handleChange}
                options={options}
                value={{ value: value, label: value }}
            />
        );
    }
}

const StyledDropdownCategories = styled(DropdownCategories)`
    margin-bottom: ${sizes.base};
`;


export default StyledDropdownCategories;
