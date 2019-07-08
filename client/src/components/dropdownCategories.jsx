import React, { Component } from "react";
import Select from 'react-select';
import styled from 'styled-components';
import sizes from '../style-settings/scale';

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
    handleChange(value) {
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

        return (
            <Select
                className={this.props.className}
                onChange={this.handleChange}
                value={this.state.value}
                options={options}
            />
        );
    }
}

const StyledDropdownCategories = styled(DropdownCategories)`
    margin-bottom: ${sizes.base};
`;


export default StyledDropdownCategories;
