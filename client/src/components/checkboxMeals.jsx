import React, { useState } from "react";
import Checkbox from "./checkbox";

function CheckboxMeals({ meal, selected, onCheckboxClick }) {
    if (selected) {
        return (
            <div>
                {meal.map((i, index) => {
                    return (
                        <div key={index} className="checkbox">
                            {selected.indexOf(i.type) !== -1 && (
                                <Checkbox
                                    key={index}
                                    onCheckboxClick={onCheckboxClick}
                                    value={i.type}
                                    checked={true}
                                />
                            )}
                            {selected.indexOf(i.type) === -1 && (
                                <Checkbox
                                    key={index}
                                    onCheckboxClick={onCheckboxClick}
                                    value={i.type}
                                    checked={false}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>
                {meal.map((i, index) => {
                    return (
                        <div key={index} className="checkbox">
                            <label key={index} htmlFor="">
                                <input
                                    onClick={onCheckboxClick}
                                    type="checkbox"
                                    value={i.type}
                                />
                                {i.type}
                            </label>
                        </div>
                    );
                })}
            </div>
        )
    }
}
export default CheckboxMeals;
