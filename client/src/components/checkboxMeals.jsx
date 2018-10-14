import React from "react";

function CheckboxMeals(props) {
    if (props.selected) {
        return (
            <div>
                {props.meal.map((i, index) => {
                    return (
                        <div key={index} className="checkbox">
                            {props.selected.indexOf(i.type) !== -1 && (
                                <label key={index} htmlFor="">
                                    <input
                                        onClick={props.onCheckboxClick}
                                        type="checkbox"
                                        value={i.type}
                                        defaultChecked="true"
                                    />
                                    {i.type}
                                </label>
                            )}
                            {props.selected.indexOf(i.type) === -1 && (
                                <label key={index} htmlFor="">
                                    <input
                                        onClick={props.onCheckboxClick}
                                        type="checkbox"
                                        value={i.type}
                                    />
                                    {i.type}
                                </label>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>
                {props.meal.map((i, index) => {
                    return (
                        <div key={index} className="checkbox">
                            <label key={index} htmlFor="">
                                <input
                                    onClick={props.onCheckboxClick}
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
