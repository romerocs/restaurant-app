import React from "react";

function DropdownCategories(props) {

    const handleChange = (e) => {
        props.handleCategoryChange(e);
    };

    return (
        <select
        className="form-control"
        name="categories"
        id="categories"
        onChange={handleChange}
    >
        {props.categories.map((i, index) => {
            return (
                <option value={i.category} key={index}>
                    {i.category}
                </option>
            );
        })}
    </select>
    )
}
export default DropdownCategories;