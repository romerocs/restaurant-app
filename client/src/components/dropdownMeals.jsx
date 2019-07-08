import React, { useState, useEffect } from "react";
import Select from 'react-select';
import styled from "styled-components";
import sizes from "../style-settings/scale";

function DropdownMeals({ className, meal, handleMealChange }) {
    const [value, setValue] = useState(null);

    const handleChange = value => {
        setValue(value);
    };

    useEffect(() => {
        if (value !== null) {
            handleMealChange(value);
        }
    });
    
    const options = [...meal];
        
    options.map((e) => {
        e.value = e.type; 
        e.label = e.type;
    });

    return (
        <Select
            className={className}
            onChange={handleChange}
            value={value}
            options={options}
        />
    );
}

const StyledDropdownMeals = styled(DropdownMeals)`
    margin-bottom: ${sizes.base};
`;

export default StyledDropdownMeals;