import React from "react";

function DropdownMeals(props) {
    const handleChange = e => {
        props.handleMealChange(e);
    };
    
    return (
        
        <select
            className="form-control"
            name="meal"
            id="meal"
            onChange={handleChange}
        >
            {props.meal.map((i, index) => {
                return (
                    <option value={i.type} key={index}>
                        {i.type}
                    </option>
                );
            })}
        </select>
    );
}
export default DropdownMeals;
