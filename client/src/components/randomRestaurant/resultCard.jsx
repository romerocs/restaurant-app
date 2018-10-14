import React from "react";
import TagMeal from "../tagMeal";
import TagCategory from "../tagCategory";
function ResultCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.restaurant.name}</h3>
                <div className="card-text">{props.restaurant.address}</div>
                {props.restaurant.meal.map((i, index) => {
                    return <TagMeal key={index} meal={i} />;
                })}
                <TagCategory category={props.restaurant.category} />
            </div>
        </div>
    );
}

export default ResultCard;
